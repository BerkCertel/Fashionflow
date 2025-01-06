const User = require("../models/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
require("dotenv").config();

// register
const register = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.findOne({ email });

  if (user) {
    return res
      .status(400)
      .json({ message: `This e-mail (${email}) address is used...` });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters long." });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await User.create({ name, email, password: hashedPassword });

  const token = await jwt.sign({ id: newUser._id }, "SECRETTOKEN", {
    expiresIn: "1h",
  });

  const cookieOptions = {
    httpOnly: true,
    expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
  };

  res
    .status(201)
    .cookie("token", token, cookieOptions)
    .json({ newUser, token });
};

// login
const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }

  const comparePassword = await bcrypt.compare(password, user.password);

  if (!comparePassword) {
    return res.status(401).json({ message: "Invalid password." });
  }

  const token = await jwt.sign({ id: user._id }, "SECRETTOKEN", {
    expiresIn: "1h",
  });

  const cookieOptions = {
    httpOnly: true,
    expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
  };

  res.status(200).cookie("token", token, cookieOptions).json({ user, token });
};

// logout
const logout = async (req, res) => {
  const cookieOptions = {
    httpOnly: true,
    expires: new Date(Date.now()),
  };

  res
    .status(200)
    .cookie("token", null, cookieOptions)
    .json({ message: "Logout is succesfully" });
};

// forgot
const forgotPassword = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }

  const resetToken = crypto.randomBytes(20).toString(`hex`);

  user.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  user.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  await user.save({ validateBeforeSave: false });

  const passwordUrl = `${process.env.MAIN_HOST}/reset/${resetToken}`;

  const message = `The token you will use to change your password: ${passwordUrl}`;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      service: `${process.env.EMAIL_SERVICE}`,
      debug: true,
      logger: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: `${process.env.EMAIL_PASS}`,
      },
      secure: true,
      tls: {
        rejectUnauthorized: true,
      },
    });

    const mailData = {
      from: process.env.EMAIL_USER,
      to: req.body.email,
      subject: "Password Reset",
      text: message,
    };

    try {
      await transporter.sendMail(mailData);
      return res.status(200).json({ message: "Please check your email." });
    } catch (error) {
      console.error("Mail Gönderme Hatası:", error);
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
      await user.save({ validateBeforeSave: false });
      res.status(400).json({ message: error.message });
    }
  } catch (error) {
    console.log(error);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    res.status(400).json({ message: error.message });
  }
};

// Reset
const resetPassword = async (req, res) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  user.password = hashedPassword;

  user.resetPasswordExpire = undefined;
  user.resetPasswordToken = undefined;

  await user.save();

  const token = jwt.sign({ id: user._id }, `${process.env.JWT_SECRET}`, {
    expiresIn: "1h",
  });

  const cookieOptions = {
    httpOnly: true,
    expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
  };
  res.status(200).cookie("token", token, cookieOptions).json({ user, token });
};

//User Detail
const userDetail = async (req, res, next) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    return res.status(404).json({ message: "User Not Found." });
  }
  res.status(200).json({ user });
};

module.exports = {
  register,
  login,
  logout,
  forgotPassword,
  resetPassword,
  userDetail,
};
