const mongoose = require("mongoose");
const path = require("path");

const envPath = path.resolve(__dirname, "../.env");

require("dotenv").config({ path: envPath });

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

module.exports = mongoose.connection;
