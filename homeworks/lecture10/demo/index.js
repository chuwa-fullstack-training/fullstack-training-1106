const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

mongoose.connect('mongodb://localhost:27017/hw10', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const todoSchema = new mongoose.Schema({
  id: Number,
  todo: String,
  done: Boolean,
});

const Todo = mongoose.model('Todo', todoSchema);
/*
const todos = [
  { id: 1, todo: 'first thing', done: true },
  { id: 2, todo: 'second thing', done: false },
  { id: 3, todo: 'third thing', done: false }
];
*/
app.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.render('index', { todos });
});

app.post('/api/todos', async (req, res) => {
  const todo = req.body.todo;
  const newTodo = new Todo({ id: todos.length + 1, todo, done: false });
  await newTodo.save();
  const todos = await Todo.find();
  res.json(todos);
});

app.put('/api/todos/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const existingTodo = await Todo.findOne({ id: todoId });
  existingTodo.done = !existingTodo.done;
  await existingTodo.save();
  res.json(existingTodo);
});

app.listen(port, () => {
  console.log('Server is running on port 3000');
});
