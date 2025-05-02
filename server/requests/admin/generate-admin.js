const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Admin = require("../../schemes/admin");
require("dotenv").config();

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS) || 10;

router.post("/signup", async (req, res) => {
  const { name, login, password } = req.body;
  try {
    const existingAdmin = await Admin.findOne({ login });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const adminUser = new Admin({
      name,
      login,
      password: hashedPassword,
    });

    await adminUser.save();
    res.status(201).json({ message: "Admin created successfully" });
  } catch (err) {
    console.error("Error creating admin user:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
