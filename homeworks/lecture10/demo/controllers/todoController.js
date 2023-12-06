const Todo = require('../models/Todo');

const getTodoList = async (req, res) =>{
    try{
        const todos = await Todo.find().exec();
        console.log(todos);
        res.render('index', { todos });
    }
    catch (e){
        console.log(e);
        res.status(500).send('Server Error');
    }
};

const addTodo = async (req, res) =>{
    try{
        const todos = await Todo.find().exec();

        const todo = new Todo({
            id: todos.length + 1,
            todo: req.body.todo
        });

        await todo.save();
        console.log(`addTodo: ${todo}`);
        res.status(200).json(todo);
    }
    catch (e){
        console.log(e);
        res.status(500).send('Server Error');
    }
};

const checkTodo = async (req, res) =>{
    try{
        const id = parseInt(req.params.id, 10);
        const todo = await Todo.findOne({id:id});
        todo.done = !todo.done;
        await todo.save();
        console.log(`checkTodo: ${todo}`);
        res.status(200).json(todo);
    }
    catch (e){
        console.log(e);
        res.status(500).send('Server Error');
    }
};

module.exports = {
    getTodoList,
    addTodo,
    checkTodo
};