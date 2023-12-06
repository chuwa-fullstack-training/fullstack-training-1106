/**
 * Refactor hw3 in lecture 7 to use Express.js with template engine.
 */

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

// app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/create-post', (req, res) => {
  const redirectURL = `/home.html?title=${req.body.title}&content=${req.body.content}`;
  res.status(302).redirect(redirectURL)
});

app.get('/home.html', (req, res) => {
  var html = fs.readFileSync(__dirname + '/public/home.html', 'utf8');
  var $ = cheerio.load(html);
  if (req.query) {
    $('body').append(`<p>title=${req.query.title}&content=${req.query.content}</p>`);
  }
  res.send($.html());
});

app.listen(port, () => console.log(`Server is running on port ${port}!`));

