const Todos = require("../models/Todo");
const createTodo = async (req, res, next) => {
  try {
    const name = req.body.todo;
    console.log(name);
    const todo = await Todos.create({
      name,
    });
    console.log(todo);
    res.json(todo);
  } catch (err) {
    res.status(422).json(err);
  }
};

const findTodo = async (req, res, next) => {
  try {
    const id = parseInt(req.params.id, 10);
    const todo = await Todos.findOne({ id });
    todo.done = !todo.done;
    res.json(todo);
  } catch (err) {
    res.status(422).json(err);
  }
};
module.exports = { createTodo, findTodo };