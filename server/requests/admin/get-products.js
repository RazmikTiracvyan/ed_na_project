const express = require('express');
const router = express.Router();
const Products = require('../../schemes/products');

router.get('/products', async (_, res) => {
  try {
    const products = await Products.find(); 
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
});

module.exports = router;