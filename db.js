const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/institutedb");
    console.log("db connected");
  } catch (error) {
    console.log("db connection error" + error);
  }
};

module.exports = connectDb;
