const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_ULR = process.env.MONGODB_URL;

// si quieres cambiar la base de datos se cambia en esta función.
const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_ULR);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error', error);
    process.exit(1);
  }
};

module.exports = connectDB;
