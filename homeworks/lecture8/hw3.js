/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Set up EJS as the view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.send('This is the home page');
});

app.get('/about', (req, res) => {
  res.send('This is the about page');
});

app.get('/home', (req, res) => {
    // Assuming you have data available, replace this with your actual data
    const formData = { title: 'Default Title', content: 'Default Content' };
  
    // Pass the formData object to the 'home' template
    res.render('home', { formData });
  });
  
app.post('/create-post', (req, res) => {
  const formData = req.body;
  res.redirect(`/home?${new URLSearchParams(formData).toString()}`);
});

// 404 Page
app.use((req, res) => {
  res.status(404).send('This is the 404 page');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
