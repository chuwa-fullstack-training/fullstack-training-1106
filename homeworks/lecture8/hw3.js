/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Use Pug as the template engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse POST request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes
app.get('/', (req, res) => {
  res.send('This is the home page');
});

app.get('/about', (req, res) => {
  res.send('This is the about page');
});

app.get('/home.html', (req, res) => {
  res.render('home');
});

app.post('/create-post', (req, res) => {
  const title = req.body.title || 'Default Title';
  const content = req.body.content || 'Default Content';

  // Redirect to home.html with the submitted data
  res.redirect(`/home.html?title=${title}&content=${content}`);
});

// 404 Not Found middleware
app.use((req, res) => {
  res.status(404).send('This is the 404 page');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

