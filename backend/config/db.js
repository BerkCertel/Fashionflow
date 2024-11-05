const mongoose = require(`mongoose`);
require("dotenv").config();

const db = () => {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log(`Your MongoDB connection is successful.`);
    })
    .catch((err) => {
      console.log("MongoDB connection error:", err);
    });
};

module.exports = db;
