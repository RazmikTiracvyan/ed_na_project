const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const Products = new Schema({
  name: { type: String, required: true },
  product_type1: { type: String, required: true },
  product_type2: { type: String, required: false },
  price: { type: Number, required: true, min: 0 },
  image: { type: String, required: true },
  count: { type: Number, required: true },
  size: { type: String, required: false },
  firma: { type: String, required: false },
  material: { type: String, required: false },
  top: { type: Boolean, required: false, default: false },
});

module.exports = model("product", Products);
