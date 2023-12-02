/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */
const express = require('express');
const app = express();
const port = 3000;

// Set up view engine
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('This is the default page');
});

app.get('/about', (req, res) => {
    res.send('This is the about page');
});

app.get('/home', (req, res) => {
    const { title, content } = req.query;
    res.render('home', { title, content });
});

app.post('/create-post', (req, res) => {
    const { title, content } = req.body;
    res.redirect(`/home?title=${title}&content=${content}`);
});

// if no api match
app.use((req, res) => res.status(404).send('This is the 404 page'));

app.listen(port, () => console.log(`Server running on local port: ${port}`));