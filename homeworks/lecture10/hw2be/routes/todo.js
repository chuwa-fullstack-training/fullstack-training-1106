var express = require('express');
var router = express.Router();
let todoController = require('../controllers/todoController');

router.get('/', todoController.getAllTodos);
router.post('/', todoController.createTodoItem);
router.patch('/:id', todoController.markTodoItemDone);

module.exports = router;
