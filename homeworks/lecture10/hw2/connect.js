const mongoose = require('mongoose');
const path = require("path");
const envPath = path.join(__dirname, "../.env");

require("dotenv").config({ path: envPath });

const connectDB = async () => {
  try {
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      };
    await mongoose.connect(process.env.MONGODB_URI, options);
    console.log('Connected!');
  } catch (err) {
    console.error('MongoDB connection failed:', err.message);
    process.exit(1);
  }
}

module.exports = connectDB;