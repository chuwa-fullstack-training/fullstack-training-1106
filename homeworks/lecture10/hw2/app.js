const express = require('express');
const app = express();

const toDoListR = require('./routes/toDoList');

const connectDB = require('./connect');

const PORT = 8000;

connectDB();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use('/', toDoListR);

app.listen(PORT);