const Todo = require('../models/todo');
async function getAllTodos(req, res) {
    try{
        const todos = await Todo.find();
        res.json(todos);
    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
}
async function createTodoItem(req, res) {
    console.log(req.body);
    try {
        const newTodo = new Todo(req.body);
        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}
async function markTodoItemDone(req, res) {
    try {
        const updatedTodo = await Todo.findOneAndUpdate(
          { id: req.params.id },
          { done: req.body.done },
          { new: true }
        );
        res.status(200).json(updatedTodo);
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllTodos,
    createTodoItem,
    markTodoItemDone
};
