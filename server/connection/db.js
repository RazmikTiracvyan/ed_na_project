const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://raztiracvyan1:gXSzBMUZejDnoLd5@cluster0.nxtjqp4.mongodb.net/test_project");
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); 
  }
};

module.exports = connectDB;
