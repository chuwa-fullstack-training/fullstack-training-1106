const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/home', (req, res, next) => {
  res.send('this is home page');
  //   next();
});

app.get('/home', (req, res, next) => {
  console.log('this is the second middleware');
  //   res.send('another page');
});

app.get('/home-another.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'another.html'));
});

app.get('*', (req, res) => {
  res.send('this is the default page');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
