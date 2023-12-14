const mongoose = require('mongoose');
require('dotenv').config({ path: '/Users/bei/Desktop/chuwa/github/fullstack-training-1106/homeworks/lecture9/.env' });
const express = require('express');
const app = express();
const port = 3000;
const routers = require('./routers');
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

app.use(express.json());
app.use('/', routers);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = mongoose;
