const Order = require("../../schemes/order");

const express = require("express");
const users = require("../../schemes/users");

const router = express.Router();

router.post("/order/:id", async (req, res) => {
  try {

    const { id } = req.params;

    const newOrder = new Order(req.body);
    
    await newOrder.save();

    const user = await users.findById(id);

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    if (!Array.isArray(user.orders)) {
      user.orders = [];
    }

    user.orders = [...user.orders , ...newOrder.ordering];
    user.basket = []; 

    
    await user.save();

    res.status(200).json({
      message: "Products ordered successfully.",
      basket: user.orders,
      user:user
    });

  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while adding the order." });
  }
});

module.exports = router;
