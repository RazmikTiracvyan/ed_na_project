const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const Admin = new Schema({
  name: { type: String, required: true },
  login: { type: String, required: true },
  password: { type: String, required: true, minLength: 6 },
});

module.exports = model("admin", Admin);