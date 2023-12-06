const mongoose = require('mongoose');
const express = require('express');
const app = express();
const routers = require('./Routers');
require('dotenv').config();
const PORT = 3000;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.log(err);
    console.log('Error connecting to MongoDB');
  });


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routers);

app.use((req, res, next) => {
    res.status(404).send('404 Not Found')
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})