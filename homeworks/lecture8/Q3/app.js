// app.js

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const pug = require('pug');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('home', { submittedData: null });
});

app.post('/create-post', (req, res) => {
  const { body } = req;
  res.redirect(`/home?${body}`);
});

app.get('/home', (req, res) => {
  const queryParams = req.query;
  res.render('home', { submittedData: queryParams });
});

app.get('/about', (req, res) => {
  res.send('this is the about page');
});

app.use((req, res) => {
  res.status(404).send('this is the 404 page');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
