const User = require(`../models/user`);
const { body, validationResult } = require(`express-validator`);
const bcrypt = require(`bcryptjs`);
const jwt = require(`jsonwebtoken`);
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const Joi = require("joi");
require("dotenv").config();

// REGİSTER
const register = async (req, res) => {
  try {
    // Joi validation
    const { error } = registerSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const { name, email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({ message: "This user already exists !!!" });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: passwordHash,
    });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const cookieOptions = {
      httpOnly: true,
      expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    };

    res.status(201).cookie("token", token, cookieOptions).json({
      newUser,
      token,
    });
  } catch (error) {
    console.error("Kayıt hatası:", error);
    return res
      .status(500)
      .json({ message: "Kayıt sırasında bir hata oluştu." });
  }
};

// LOGİN
const login = async (req, res) => {
  const { error } = loginSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const comparePassword = await bcrypt.compare(password, user.password);
  if (!comparePassword) {
    return res.status(401).json({ message: "Incorrect password entered." });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  const cookieOptions = {
    httpOnly: true,
    expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
  };

  res.status(200).cookie("token", token, cookieOptions).json({
    user,
    token,
  });
};

// LOGOUT
const logout = async (req, res) => {
  const cookieOptions = {
    httpOnly: true,
    expires: new Date(Date.now()),
  };

  res.status(200).cookie(`token`, null, cookieOptions).json({
    message: `Logout successful`,
  });
};

//FORGOT PASSWORD
const forgotPassword = async (req, res) => {
  const { error } = forgotPasswordSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(404).json({ message: "No such user was found." });
  }

  const resetToken = crypto.randomBytes(20).toString("hex");

  user.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  user.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  await user.save({ validateBeforeSave: false });

  const passwordUrl = `${req.protocol}://${req.get(
    "host"
  )}/reset/${resetToken}`;

  const message = `The password reset link has been sent via email. : ${resetToken}`;

  try {
    const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      secure: true,
    });

    const mailData = {
      from: process.env.EMAIL_USER,
      to: req.body.email,
      subject: "Password Reset",
      text: message,
    };

    await transport.sendMail(mailData);

    res.status(200).json({ message: "Please check your email." });
  } catch (error) {
    user.resetPasswordExpire = undefined;
    user.resetPasswordToken = undefined;

    await user.save({ validateBeforeSave: false });

    res.status(500).json({ message: error.message });
  }
};

//RESET PASSWORD
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
    return res.status(400).json({ message: "Invalid or expired token." });
  }

  user.password = req.body.password;

  user.resetPasswordExpire = undefined;

  user.resetPasswordToken = undefined;

  await user.save();

  const token = jwt.sign({ id: user._id }, "SECRETTOKEN", { expiresIn: "1h" });

  const cookieOptions = {
    httpOnly: true,
    expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
  };

  res.status(200).cookie(`token`, token, cookieOptions).json({
    user,
    token,
  });
};

const userDetail = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return status(404).json({ message: "User not found." });
  }

  res.status(200).json({ user });
};

const registerSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const forgotPasswordSchema = Joi.object({
  email: Joi.string().email().required(),
});

module.exports = {
  register,
  login,
  logout,
  forgotPassword,
  resetPassword,
  userDetail,
};
