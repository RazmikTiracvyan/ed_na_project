const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const User = require("../../schemes/users");
require("dotenv").config();


const JWT_SECRET = process.env.JWT_SECRET_KEY;

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendVerificationEmail = (email, code) => {
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Email Verification Code",
    text: `Your verification code is: ${code}`,
  };

  return transporter.sendMail(mailOptions);
};

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      verificationCode: verificationCode,
      verified: false,
    });

    await newUser.save();

    await sendVerificationEmail(email, verificationCode);
    
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res
      .status(201)
      .json({
        message: "User created successfully. Verification code sent to email.",
        token,
      });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", err });
  }
});

module.exports = router;
