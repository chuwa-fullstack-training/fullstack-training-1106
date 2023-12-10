const express = require('express');
const connectDB = require('./db');
const {
  render,
  createTodo,
  updateTodo
} = require('./controllers/todoList');

const app = express();

connectDB();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', render);

app.post('/api/todos', createTodo);

app.put('/api/todos/:id', updateTodo);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
