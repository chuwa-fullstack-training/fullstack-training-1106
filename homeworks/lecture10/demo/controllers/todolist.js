const Todo = require('../models/Todo');

// const todos = [
//   { id: 1, todo: 'first thing', done: true },
//   { id: 2, todo: 'second thing', done: false },
//   { id: 3, todo: 'third thing', done: false }
// ];

var todos;

const render = async(req, res) => {
  todos = await Todo.find();
  res.render('index', { todos });
}

const createTodo = async (req, res) => {
  const todoMsg = req.body.todo;
  const todo = new Todo({ _id: todos.length + 1, todo: todoMsg, done: false })
  await todo.save();
  todos.push(todo);
  res.json(todos);
};

const updateTodo = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const todo = await todos.find(t => t._id === id);
  todo.done = !todo.done;
  await todo.save();
  res.json(todo);
}

module.exports = {
  render,
  createTodo,
  updateTodo
};

