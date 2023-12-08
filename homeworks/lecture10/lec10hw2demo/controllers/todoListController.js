const Todo = require('../schemas/Todo');

//get the todoList
const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.render('index', { todos });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

//create a todo
const createTodo = async (req, res) => {
    try {
        const newTodo = new Todo({
            todo: req.body.todo,
        });
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

//update a todo by check or uncheck box selection
const updateTodoCheck = async (req, res) => {
    try {
        const todoId = req.params?.id;      // get the todo id
        const todo = await Todo.findById(todoId);   // find the corresponding todo
        todo.done = !todo.done;             // change the todo.done
        await todo.save();                  // save it to db
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    getAllTodos,
    createTodo,
    updateTodoCheck
};