const express = require("express");
const User = require("../../schemes/users");

const router = express.Router();

router.post("/quantity-increase", async (req, res) => {
  try {
    const { userId, productId } = req.body;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found." });

    user.basket = user.basket.map((item) =>
      item._id.toString() === productId
        ? { ...item, quantityToBuy: (item.quantityToBuy || 0) + 1 }
        : item
    );

    await user.save();
    res.status(200).json({ basket: user.basket });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error increasing quantity." });
  }
});

module.exports = router;
