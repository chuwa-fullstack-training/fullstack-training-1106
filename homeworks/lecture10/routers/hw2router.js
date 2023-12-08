const express = require('express');
const router = express.Router();
const {
    getAllTodos,
    createTodos,
    updateTodos
} = require('../controller/hw2methods');

router.get('/todos', getAllTodos);

router.post('/todos', createTodos);

router.put('/todos/:id', updateTodos);

module.exports = router;