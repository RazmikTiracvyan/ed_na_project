const express = require("express");
const router = express.Router();

const Products = require("../../schemes/products");

const multer = require("multer");


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); 
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + "-" + file.originalname); 
  },
});

const upload = multer({ storage: storage });

router.post("/add-product", upload.single("image"), async (req, res) => {
  try {
    const image = req.file ? req.file.path : null; 

    const newProduct = new Products({...req.body, image});

    await newProduct.save();
    res.status(201).json({ newProduct });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", err });
  }
});

module.exports = router;
