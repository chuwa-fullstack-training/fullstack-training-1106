/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */
const express = require('express');
const app = express();

app.set('views engine', 'ejs');

app.get('/hw3', (req, res) => {
  const data = ['Item 1', 'Item 2', 'Item 3'];

  res.render('index', { data: data });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
