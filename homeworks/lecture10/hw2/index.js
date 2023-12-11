const express = require('express');
const mongoose = require('mongoose');
const Todo = require('./models/todo');
const connectDB = require('./connectDB');

connectDB();

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');


app.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.render('index', { todos });
});

app.post('/api/todos', async (req, res) => {
  const { todo } = req.body;
  const newTodo = new Todo({ todo, done: false });
  await newTodo.save();
  res.json(newTodo);
});

app.put('/api/todos/:id', async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);
  todo.done = !todo.done;
  await todo.save();
  res.json(todo);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
