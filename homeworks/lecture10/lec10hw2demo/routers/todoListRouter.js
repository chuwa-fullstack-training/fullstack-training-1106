const express = require('express');
const todoRouter = express.Router();
const {
    getAllTodos,
    createTodo,
    updateTodoCheck
} = require('../controllers/todoListController');

//get the todoList
todoRouter.get('/', getAllTodos);

//create a todo
todoRouter.post('/api/todos', createTodo);

//update a todo by check or uncheck box selection
todoRouter.put('/api/todos/:id', updateTodoCheck);

module.exports = todoRouter;