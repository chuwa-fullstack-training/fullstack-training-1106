const express = require('express');
const router = express.Router();
const {
    getTodoList,
    addTodo,
    checkTodo
} = require('../controllers/todoController');

//get the todoList
router.get('/', getTodoList);

//add a task
router.post('/api/todos', addTodo);

//check or uncheck a task
router.put('/api/todos/:id', checkTodo);

module.exports = router;