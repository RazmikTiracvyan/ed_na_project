const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const Order = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  phone: { type: String, required: true, trim: true },
  adress: { type: String, required: true, trim: true },
  ordering: { type: Array, default: [], required: true },
  checked: { type: Boolean, default: false, required:false },
  price: {type:Number, required:true, default:0}
});

module.exports = model("order", Order);