const Todo = require('./schema')

const getAllTodos = async (req, res) => {
    const todos = await Todo.find()
        .catch(err => res.status(500).json({message: 'Error finding all Todos', err}));
    // res.status(200).json(todos);
    return todos;
}

const createTodos = async (req, res) => {
    const todo = new Todo(req.body);
    await todo.save().then(todo => {
        console.log('Todo saved');
        res.status(201).json(todo);
    }).catch(err => res.status(500).json({message: 'Error saving Todo', err}));
}

const updateTodos = async (req, res) => {
    const todo = await Todo.findByIdAndUpdate(req.params?.id, req.body).then(updatedTodo => {
        console.log('Todo Updated');
        res.status(200).json(updatedTodo);
    }).catch(err => res.status(500).json({message: 'Error updating Todo', err}));
}

module.exports = {
    getAllTodos,
    createTodos,
    updateTodos
}