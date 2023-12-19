const express = require("express");
const { createTodo, findTodo } = require("../controllers/todo");
const router = express.Router();

router.post("/todos", createTodo);
router.put("/todos/:id", findTodo);
module.exports = router;
