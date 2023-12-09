const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

const todoSchema = new mongoose.Schema({
  todo: String,
  done: Boolean,
});

const Todo = mongoose.model('Todo', todoSchema);

app.use(express.static('public'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

// RESTful API Routes
app.get('/api/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

app.get('/api/todos/:id', async (req, res) => {
  const id = req.params.id;
  const todo = await Todo.findById(id);
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  res.json(todo);
});

app.post('/api/todos', async (req, res) => {
  const { todo } = req.body;
  if (!todo) {
    return res.status(400).json({ error: 'Todo field is required' });
  }
  const newTodo = new Todo({ todo, done: false });
  await newTodo.save();
  const todos = await Todo.find();
  res.json(todos);
});

app.put('/api/todos/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    // Toggle the 'done' status
    todo.done = !todo.done;

    await todo.save();
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.delete('/api/todos/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await Todo.findByIdAndDelete(id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Render the index page with todos
app.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.render('index', { todos });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
