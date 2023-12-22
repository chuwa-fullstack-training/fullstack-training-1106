const express = require('express');
const app = express();
const port = 3000;
const connectDB = require('./db');
const todoController = require('./controllers/todoController');
const Todo = require('./models/Todo');

connectDB();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/todos', todoController.getAllTodos);
app.get('/todos/create', (req, res) => {
  res.render('todos/new');
});
app.get('/todos/:id/edit', async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  res.render('todos/edit', {todo});
});

app.post('/todos', todoController.createTodo);
app.post('/todos/:id/update', todoController.updateTodo);
app.post('/todos/:id/delete', todoController.deleteTodo);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
})