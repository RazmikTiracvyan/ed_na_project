const express = require("express");
const User = require("../../schemes/users");

const router = express.Router();

router.post("/add-to-basket", async (req, res) => {
  try {
    const { userId, product } = req.body;

    if (!userId || !product) {
      return res.status(400).json({ error: "User ID and product are required." });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    if (!Array.isArray(user.basket)) {
      user.basket = [];
    }
    user.basket.push(product);

    await user.save();

    res.status(200).json({ message: "Product added to basket successfully.", basket: user.basket });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while adding the product to the basket." });
  }
});

module.exports = router;
