const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../../schemes/admin");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET_KEY;

router.post("/login", async (req, res) => {
  const { login, password } = req.body;

  try {
    const adminUser = await Admin.findOne({ login });
    if (!adminUser) {
      return res.status(400).json({ message: "Invalid login credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, adminUser.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid login credentials" });
    }

    const token = jwt.sign({ id: adminUser._id, login: adminUser.login }, JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ message: "Login successful", token , adminUser});
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
