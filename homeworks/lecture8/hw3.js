/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require('express');
const hw3Router = require('./hw3Router');
const app = express();
const PORT = 3000;

app.set('view engine', 'pug');
app.set('views','./views');

app.use(express.urlencoded({ extended: true }));
app.use('/', hw3Router);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})
