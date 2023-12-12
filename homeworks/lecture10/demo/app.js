const express = require('express');
const router = require('./router');
const connectDB = require('./db');
const app = express();
const port = 3000;


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

connectDB();

app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
