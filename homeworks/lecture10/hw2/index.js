const express = require('express');
const path = require('path');
const Todos = require('./db/main');
const connectDB = require('./db/connectDB');
require('dotenv').config()

const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

const todos = [
    { id: 1, todo: 'first thing', done: true },
    { id: 2, todo: 'second thing', done: false },
    { id: 3, todo: 'third thing', done: false }
  ];

app.get('/', async (req, res) => res.render('index', { todos: await Todos.getAllTodos() }));

app.post('/api/todos', Todos.createTodos);

app.put('/api/todos/:id', Todos.updateTodos);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});