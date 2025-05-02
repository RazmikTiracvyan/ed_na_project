const express = require('express');
const multer = require('multer');
const router = express.Router();
const Products = require('../../schemes/products');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

router.put('/edit-one/:id', upload.single('image'), async (req, res) => {
  try {
    const updatedData = {
      ...req.body,
    };

    // If an image file is uploaded, add its path to the data
    if (req.file) {
      updatedData.image = req.file.path;
    }

    const updatedProduct = await Products.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const allProducts = await Products.find();
    res.status(200).json(allProducts);
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error });
  }
});

module.exports = router;
