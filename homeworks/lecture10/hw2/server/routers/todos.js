const express = require('express');
const {
  createtodo,
  getalltodos,
  updatetodo
} = require('../controllers/todos');

const router = express.Router();

router.post('/createtodo', createtodo);

router.get('/getalltodos', getalltodos);

router.put('/updatetodo/:id', updatetodo);

module.exports = router;