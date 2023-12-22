const Todo = require('../models/Todo');

exports.getAllTodos = async (req, res) => {
  const todos = await Todo.find();
  res.render('todos/index', {todos});
}

exports.createTodo = async (req, res) => {
  console.log(req);
  const {title, description, dueDate} = req.body;
  await Todo.create({title, description, dueDate});
  res.redirect('/todos');
}

exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description, status, dueDate } = req.body;
  await Todo.findByIdAndUpdate(id, { title, description, status, dueDate });
  res.redirect('/todos');
};

exports.deleteTodo = async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.redirect('/todos');
};
