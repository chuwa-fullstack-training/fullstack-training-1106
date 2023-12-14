const express = require('express');
const mongoose = require('mongoose');
const { Todo } = require('./schema');
const app = express();
mongoose
  .connect('mongodb://localhost:27017/todo_list', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.log('Error connecting to MongoDB', err);
  });
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const path = require('path');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.render('index', { todos });
});

app.post('/api/todos', async (req, res) => {
  const todo = req.body.todo;
  console.log("todos: ", todo);
  const last_todo = await Todo.findOne().sort('-index');
  const cur_index = last_todo ? last_todo.index : 0;
  const newTodo = new Todo({ index: cur_index + 1, todo: todo });
  newTodo
    .save()
    .then(() => {
      console.log('newTodo saved');
      res.json(todo);
    })
    .catch(err => {
      console.log('Error', err);
      res.status(400).send("Invalid todo")
    })
});

app.put('/api/todos/:id', async (req, res) => {
  const id = req.params.id;
  console.log("todo id: ", id);
  try {
    const todo = await Todo.findOne({ index: id });
    if (!todo) {
      return res.status(404).send("todo not found")
    }
    todo.done = !todo.done;
    await todo.save();
    res.json(todo);
  } catch (err) {
    res.status(400).send("Error updating todo")
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
