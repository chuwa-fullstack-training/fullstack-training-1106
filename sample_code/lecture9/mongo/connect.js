const mongoose = require('mongoose');
require('dotenv').config({ path: '/Users/bei/Desktop/chuwa/github/fullstack-training-1106/sample_code/lecture9/.env' });

mongoose
  .connect(process.env.MONGODB_URI, {
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