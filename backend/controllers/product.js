const Product = require(`../models/product.js`);
const ProductFilterUtil = require(`../utils/productFilter.js`);
const Joi = require("joi");

// All Products
const allProducts = async (req, res) => {
  const resultsPerPage = 10;

  const productFilter = new ProductFilterUtil(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultsPerPage);

  const products = await productFilter.query;

  res.status(200).json({
    products,
  });
};

// Admin All Product
const adminProducts = async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json({
    products,
  });
};

// Single Product
const DetailProducts = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: "product not found" });
  }

  res.status(200).json({
    product,
  });
};

// ADMİN && Create Product
const createProduct = async (req, res) => {
  req.body.user = req.user.id;

  const product = await Product.create(req.body);

  res.status(201).json({
    product,
  });
};

// ADMİN && Delete Product
const deleteProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: "product not deleted." });
  }

  await product.remove();

  res.status(200).json({
    message: `Product deleted successfully!`,
  });
};

// ADMİN && Update Product
const updateProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res
      .status(500)
      .json({ message: "product not updated. Product not found." });
  }

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
  const { productId, comment, rating } = req.body;

  const review = {
    user: req.user._id,
    userName: req.user.name,
    comment,
    rating: Number(rating),
  };
  const product = await Product.findByIdAndUpdate(productId);

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
