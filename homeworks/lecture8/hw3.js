/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require('express');
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());

const posts = [
    { title: "Sample1", content: "Content1" },
];

app.get('/', (req, res) => res.status(200).json({message: 'this is the home page'}));
app.get('/about', (req, res) => res.status(200).json({message: 'this is the about page'}));
app.get('/home.html', async (req, res) => res.render('index', { posts }));

app.post('/create-post', (req, res) => {
    console.log('Creating post');
    const post = req.body;
    posts.push(post);
    res.json(posts);
})

app.use((req, res) => res.status(404).send('This is the 404 page'));

app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));