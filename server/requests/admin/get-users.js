const express = require("express");
const User = require("../../schemes/users");

const router = express.Router();

router.get("/users/last", async (_, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 }).limit(10);

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
});

module.exports = router;
