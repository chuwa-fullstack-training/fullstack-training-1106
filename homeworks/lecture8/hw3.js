/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.render('home', { title: '', content: '' });
});

app.post('/create-post', (req, res) => {
    const { title, content } = req.body;
    res.render('home', { title, content });
});

app.listen(port, () => {
    console.log(`Server is running on https://localhost:${port}`);
});