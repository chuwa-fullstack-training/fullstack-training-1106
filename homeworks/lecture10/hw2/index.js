const express = require('express');
const path = require('path');
const mongoose = require('mongoose'); // Import Mongoose

const app = express();
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

const Todo = require('./schema.js');
const uri = "mongodb://localhost:27017/TodoList"; // MongoDB URI
mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.get('/', async (req, res) => {
  try {
    // Assuming todos is your Mongoose model
    // Adjust the variable names to match your export if necessary
    const todos = await Todo.find({}) || [];
    res.render('index', {todos});
  } catch (err) {
    console.error('Failed to get todos', err);
    res.status(500).send('An error occurred on the server.');
  }
});

app.post('/api/todos', async (req, res) => {
  const todoDescription = req.body.todo;
  const newTodo = new Todo({
    description: todoDescription,
    done: false
  });
  try {
    // Save the new todo item in the database
    await newTodo.save();

    // If you want to send back all todos:
    const allTodos = await Todo.find();
    res.json(allTodos);
  } catch (error) {
    console.error('Error saving new todo', error);
    res.status(500).send('An error occurred while saving the todo');
  }
});

app.delete('/api/delete-todos', async (req, res) => {
  try {
    const { ids } = req.body;
    // Use your database method to delete todos with the provided IDs
    await Todo.deleteMany({ _id: { $in: ids }});

    res.json({ message: 'Todos deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error occurred');
  }
});


app.put('/api/todos/:id', async (req, res) => {
  const id = req.params.id;
  const {done} = req.body;
  const updatedTodo = await Todo.findByIdAndUpdate(id, {done}, {new: true});
  res.json(updatedTodo);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
