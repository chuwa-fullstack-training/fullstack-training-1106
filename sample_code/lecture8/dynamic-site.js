const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index', { title: 'Pug Template', name: 'Aaron' });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
