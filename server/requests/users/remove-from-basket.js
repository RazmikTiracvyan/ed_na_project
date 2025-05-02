const express = require("express");
const User = require("../../schemes/users");

const router = express.Router();

router.post("/remove-from-basket", async (req, res) => {
  try {
    const { userId, productId } = req.body;

    
    if (!userId || !productId) {
      return res
        .status(400)
        .json({ error: "User ID and product ID are required." });
    }


    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    if (!Array.isArray(user.basket)) {
      return res
        .status(400)
        .json({ error: "Basket is not properly initialized." });
    }

    const initialLength = user.basket.length;
    
    user.basket = user.basket.filter((item) => item._id !== productId);

    if (user.basket.length === initialLength) {
      return res
        .status(404)
        .json({ error: "Product not found in the basket." });
    }

    await user.save();

    res
      .status(200)
      .json({
        message: "Product removed from basket successfully.",
        basket: user.basket,
      });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        error: "An error occurred while removing the product from the basket.",
      });
  }
});

module.exports = router;
