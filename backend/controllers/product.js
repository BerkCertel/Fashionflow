const Product = require(`../models/product.js`);
const ProductFilter = require(`../utils/productFilter.js`);
const Joi = require("joi");
const cloudinary = require("cloudinary").v2;

// All Products
const allProducts = async (req, res) => {
  // const resultPerPage = 10;

  // const productFilter = new ProductFilter(Product.find(), req.query)
  //   .search()
  //   .filter()
  //   .pagination(resultPerPage);

  // const products = await productFilter.query;

  try {
    const products = await Product.find({});
    res.status(200).json({ products });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Admin All Product
const adminProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ products });
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Single Product
const DetailProducts = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({ product });
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// ADMİN && Create Product
const createProduct = async (req, res, next) => {
  // let images = [];

  // if (typeof req.body.images === "string") {
  //   images.push(req.body.images);
  // } else {
  //   images = req.body.images;
  // }

  // let allImage = [];

  // for (let i = 0; i < images.length; i++) {
  //   const result = await cloudinary.uploader.upload(images[i], {
  //     folder: "products",
  //   });

  //   allImage.push({ public_id: result.public_id, url: result.secure_url });
  // }

  // req.body.images = allImage;
  // req.body.user = req.user.id;

  try {
    const productData = req.body;

    const product = await Product.create(productData);
    res.status(201).json({ product });
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// ADMİN && Delete Product
const deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "product not found." });
    }

    for (let i = 0; i < product.images.length; i++) {
      await cloudinary.uploader.destroy(product.images[i].public_id);
    }

    await Book.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "The book has been deleted successfully" });
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// ADMİN && Update Product
const updateProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res
      .status(500)
      .json({ message: "product not updated. Product not found." });
  }

  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    for (let i = 0; i < product.images.length; i++) {
      await cloudinary.uploader.destroy(product.images[i].public_id);
    }
  }

  let allImage = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.uploader.upload(images[i], {
      folder: "products",
    });

    allImage.push({ public_id: result.public_id, url: result.secure_url });
  }

  req.body.images = allImage;

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    product,
  });
};

// CREATE REWİEW
const createReview = async (req, res, next) => {
  try {
    const { productId, comment, rating } = req.body;

    const review = {
      user: req.user._id,
      userName: req.user.name,
      comment,
      rating: Number(rating),
    };
    const product = await Product.findById(productId);

    product.reviews.push(review);

    let avg = 0;

    product.reviews.forEach((rev) => {
      avg += rev.rating;
    });

    product.rating = avg / product.reviews.length;

    await product.save({ validateBeforeSave: false });

    res.status(200).json({
      message: `Your comment has been added successfully`,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Bir hata oluştu." });
  }
};

const productSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.object({
    current: Joi.number().required(),
    discount: Joi.number().required(),
  }).required(),
  stock: Joi.number().default(1).min(0),
  category: Joi.string().required(),
  images: Joi.array()
    .items(
      Joi.object({
        public_id: Joi.string().required(),
        url: Joi.string().uri().required(),
      })
    )
    .required(),
  sizes: Joi.array().items(Joi.string()).optional(),
  colors: Joi.array().items(Joi.string()).required(),
  rating: Joi.number().min(0).max(5).default(0),
  isNewSeason: Joi.boolean().default(false),
  reviews: Joi.array()
    .items(
      Joi.object({
        user: Joi.string(),
        name: Joi.string().required(),
        comment: Joi.string().required(),
        rating: Joi.number().min(0).max(5).required(),
      })
    )
    .optional(),
});

module.exports = {
  allProducts,
  DetailProducts,
  createProduct,
  deleteProduct,
  updateProduct,
  createReview,
  adminProducts,
};
