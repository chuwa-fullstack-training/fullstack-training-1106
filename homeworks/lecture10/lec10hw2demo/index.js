const express = require('express');
const connectDB = require('./db/mongodb-connect');
const todoListRouter = require('./routers/todoListRouter');

const app = express();
const port = 3000;

connectDB();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use('/', todoListRouter);

app.listen(port, () => console.log(`app is listening on ${port}`));