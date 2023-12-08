const Todo = require('../models/Todo');

const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.render('index', { todos });
    }catch (err) {
        console.error(err.message);
        res.status(500).json({message: 'Server Error'});
    }
};

const createTodos = async (req, res) => {
    try{
        const todoInfo = {...req.body};
        const todo = new Todo(todoInfo);
        await todo.save();
        res.json({message: 'Created Todo'})
    }catch (err) {
        console.error(err.message);
        res.status(500).json({message: 'Server Error'});
    }
}

const updateTodos = async (req, res) => {
    try{
        const todoId = req.params.id;
        const todo = await Todo.findById(todoId);
        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        const updatedTodo = await Todo.findByIdAndUpdate(
            todoId,
            { done: !todo.done },
            { new: true }
        );
        res.json(updatedTodo);
    }catch (err) {
        console.error(err.message);
        res.status(500).json({message: 'Server Error'});
    }
}

module.exports = {
    getAllTodos,
    createTodos,
    updateTodos    
};