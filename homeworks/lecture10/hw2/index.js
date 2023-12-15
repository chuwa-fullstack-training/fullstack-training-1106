const express = require('express');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://damonliren:ncUWDVWw0zlSVtYm@liren.pncnd7y.mongodb.net/todoApp');

const Todo = require('./models/Todo'); 
app.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.render('index', { todos });
});


app.post('/api/todos', async (req, res) => {
  const newTodo = new Todo({ text: req.body.todo });
  await newTodo.save();
  res.redirect('/'); // Redirect to refresh the list
});


app.put('/api/todos/:id', async (req, res) => {
  console.log('put');
  const updatedTodo = await Todo.findByIdAndUpdate(
    req.params.id, 
    { $set: { done: req.body.done } }, 
    { new: true }
  );
  res.json(updatedTodo);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
