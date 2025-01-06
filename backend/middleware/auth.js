const User = require("../models/user.js");
const jwt = require("jsonwebtoken");

const authenticationMid = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res
        .status(401)
        .json({ message: "Authorization header is missing." });
    }

    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ message: "Token is missing. Please log in first." });
    }

    const decodedData = jwt.verify(token, "SECRETTOKEN");
    if (!decodedData) {
      return res
        .status(401)
        .json({ message: "Invalid token. Please log in again." });
    }

    req.user = await User.findById(decodedData.id);
    if (!req.user) {
      return res.status(404).json({ message: "User not found." });
    }

    next();
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Something went wrong.", error: error.message });
  }
};

const roleChecked = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ message: "You do not have permission to log in." });
    }
    next();
  };
};

module.exports = { authenticationMid, roleChecked };
