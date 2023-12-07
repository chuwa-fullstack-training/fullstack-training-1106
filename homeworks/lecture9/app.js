const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;
require('dotenv').config();

app.use(express.json());

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

const router = require('./router');
app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});