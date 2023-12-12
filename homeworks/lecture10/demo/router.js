const express = require('express');
const {
    createTodo,
    updateTodo,
    getAllTodos,
} = require('./controller');

const router = express.Router();

router.post('/todos', createTodo);
router.put('/todos/:id', updateTodo);
router.get('/todos', getAllTodos);

module.exports = router;
