const express = require('express');
const router = express.Router();
const Order = require('../../schemes/order'); 

router.put('/confirm-order/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { checked: true },
      { new: true } 
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json({
      message: 'Order confirmed successfully',
      order: updatedOrder,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error confirming order', error });
  }
});

module.exports = router;
