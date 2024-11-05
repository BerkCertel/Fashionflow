const User = require("../models/user.js");
const jwt = require("jsonwebtoken");

const authenticationMid = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Authorization failed. Token not found." });
  }

  const decodedData = jwt.verify(token, "SECRETTOKEN");

  if (!decodedData) {
    return res.status(401).json({ message: "Your access token is invalid." });
  }

  req.user = await User.findById(decodedData.id);

  next();
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
