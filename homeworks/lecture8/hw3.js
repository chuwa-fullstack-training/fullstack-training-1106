/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/home.html', (req, res) => {
  res.render('home', { data: `title=${req.query.title}&content=${req.query.content}` });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});