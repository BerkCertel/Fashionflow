const mongoose = require("mongoose");

const categorySchme = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchme);
