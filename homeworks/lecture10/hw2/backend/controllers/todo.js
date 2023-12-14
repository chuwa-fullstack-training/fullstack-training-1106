const Todo = require("../models/todo");

const createOneTodo = async (req, res) => {
  try {
    const todo = new Todo({ name: req.body.todo, done: false });
    // console.log(req.body);
    console.log(todo);
    await todo.save();
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json("Server Error");
  }
};

const updateOneTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    todo.done = !todo.done;
    console.log(todo);
    await todo.save();
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json("Server Error");
  }
};

module.exports = {
  createOneTodo,
  updateOneTodo,
};
