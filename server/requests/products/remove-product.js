const express = require('express');
const router = express.Router();
const Products = require('../../schemes/products');

router.delete('/remove-one/:id', async (req, res) => {
  try {
    const allProducts =  await Products.find()
    const product = await Products.findByIdAndDelete(req.params.id);
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
});

module.exports = router;