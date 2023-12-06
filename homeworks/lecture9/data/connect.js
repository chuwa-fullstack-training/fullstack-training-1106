const mongoose = require('mongoose');
require('dotenv').config();

console.log(process.env.MONGODB_URI+'/hw9');
mongoose
  .connect(process.env.MONGODB_URI+'hw9', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.log('Error connecting to MongoDB', err);
  });

module.exports = mongoose;