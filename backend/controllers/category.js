const Category = require(`../models/category.js`);
const Joi = require("joi");
const cloudinary = require("cloudinary").v2;

// All Products
const allCategory = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json({ categories });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Admin All Product
const adminCategory = async (req, res, next) => {
  try {
    const categories = await Category.find({});
    res.status(200).json({ categories });
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Single Product
const singleCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.status(200).json({ category });
  } catch (error) {
    console.error("Error fetching category:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// ADMİN && Create Categıry
const createCategory = async (req, res, next) => {
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
    const categoryData = req.body;
    const category = await Category.create(categoryData);
    res.status(201).json({ category });
  } catch (error) {
    console.error("Error fetching category:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// ADMİN && Delete Category
const deleteCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      return res.status(404).json({ message: "category not deleted." });
    }

    for (let i = 0; i < category.images.length; i++) {
      await cloudinary.uploader.destroy(category.images[i].public_id);
    }

    await Category.findByIdAndDelete(req.params.id);

    res
      .status(200)
      .json({ message: "The category has been deleted successfully" });
  } catch (error) {
    console.error("Error fetching category:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// ADMİN && Update Category
const updateCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
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
      for (let i = 0; i < category.images.length; i++) {
        await cloudinary.uploader.destroy(category.images[i].public_id);
      }
    }

    let allImage = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.uploader.upload(images[i], {
        folder: "category",
      });

      allImage.push({ public_id: result.public_id, url: result.secure_url });
    }

    req.body.images = allImage;

    category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      category,
    });
  } catch (error) {
    console.error("Error fetching category:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

const categorySchema = Joi.object({
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
  allCategory,
  adminCategory,
  singleCategory,
  createCategory,
  deleteCategory,
  updateCategory,
};
