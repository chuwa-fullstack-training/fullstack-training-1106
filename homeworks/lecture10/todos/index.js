const express = require('express');
const Todo = require('./model/Todo');

const connectDB = require('../db');
const app = express();
const port = 3000;
const {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
} = require('./controller/todo');

connectDB();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', async (req, res) => {  
    const todos =  await Todo.find();
    res.render('index', { todos });
 
});

app.get('/api/todos', getAllTodos);
app.post('/api/todos', createTodo);
app.get('/api/todos/:id', getTodoById);
app.put('/api/todos/:id', updateTodo);
app.delete('/api/todos/:id', deleteTodo);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});