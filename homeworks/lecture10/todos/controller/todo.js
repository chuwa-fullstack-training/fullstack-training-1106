const Todo = require('../model/Todo');

const getAllTodos = async (req, res) => {
    try{
        const todos = await Todo.find();
        res.status(200).json(todos);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
};

const getTodoById = async (req, res) => {
    try{
        const todo = await Todo.findById(req.params.id);
        res.status(200).json(todo);
    }
    catch(err){
        res.status(404).json({message: err.message});
    }
};

const createTodo = async (req, res) => {
    const todo = new Todo({
        todo: req.body.todo,
        done: req.body.done
    });
    try{
        const newTodo = await todo.save();
        res.status(201).json(newTodo);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
};

const updateTodo = async (req, res) => {
    try{
        const todo = await Todo.findById(req.params?.id);
        todo.todo = req.body.todo ?? todo.todo;
        todo.done = req.body.done ?? todo.done;
        const updatedTodo = await todo.save();
        res.status(200).json(updatedTodo);
    }
    catch(err){
        res.status(400).json({message: err.message});
    }
};

const deleteTodo = async (req, res) => {
    try{
        const todo = await Todo.findById(req.params.id);
        const deletedTodo = await todo.remove();
        res.status(200).json(deletedTodo);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
};

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo
};

