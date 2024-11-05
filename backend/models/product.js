const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },

    price: {
      current: { type: Number, required: true },
      discount: { type: Number, required: true },
    },

    stock: { type: Number, required: true, default: 1 },
    category: { type: String, required: true },

    images: [{ type: String, required: true }],

    sizes: [{ type: String }],

    colors: [{ type: String, required: true }],

    rating: { type: Number, default: 0 },

    user: { type: mongoose.Schema.ObjectId, ref: "User", required: true },

    isNewSeason: { type: Boolean, default: false },

    reviews: [
      {
        user: {
          type: mongoose.Schema.ObjectId,
          ref: "User",
          required: true,
        },

        name: {
          type: String,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
