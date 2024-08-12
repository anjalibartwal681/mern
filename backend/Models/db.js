// db.js
const mongoose = require("mongoose");
require("dotenv").config(); // Ensure .env file is loaded

// MongoDB Connection
const mongo_url = process.env.MNGO_CONN;

const connectDB = async () => {
  try {
    await mongoose.connect(mongo_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected ......");
  } catch (err) {
    console.log("MongoDB connection error:", err);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
