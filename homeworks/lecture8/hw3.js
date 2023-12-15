/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files (e.g., HTML, CSS, JS) from a designated directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Routes
app.post('/create-post', (req, res) => {
    // Construct query string from form data
    const queryParams = new URLSearchParams(req.body).toString();
    // Redirect to the home page with query parameters
    res.redirect(`/home.html?${queryParams}`);
});

app.use((req, res) => {
    res.status(404).send('This is the 404 page');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
