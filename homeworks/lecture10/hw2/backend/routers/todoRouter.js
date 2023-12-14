const express = require("express");
const router = express.Router();
const { createOneTodo, updateOneTodo } = require("../controllers/todo");

router.post("/todos", createOneTodo);
router.put("/todos/:id", updateOneTodo);

module.exports = router;
