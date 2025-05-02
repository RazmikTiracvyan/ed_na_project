const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const Users = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minLength:  6 },
  verificationCode: { type: String, required: true },
  verified: { type: Boolean, default: false },
  basket: { type: Array, required: false, default: [] },
  orders: {type:Array, required:false, default: []}
});

module.exports = model("users", Users);
