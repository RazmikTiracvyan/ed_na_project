const express = require('express');
const router = express.Router();
const Orders = require('../../schemes/order');

router.get('/orders', async (_, res) => {
  try {
    const orders = await Orders.find(); 
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
});

module.exports = router;