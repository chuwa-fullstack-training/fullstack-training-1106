const data = require('../data');
const mongoose = require('mongoose');
const todoData = data.todo;

const createtodo = async (req,res) => {
    const {name} = req.body;
    let resp = await todoData.createTodo(name);
    res.send(resp);
};


const updatetodo = async (req,res) => {
    const id = req.params.id;
    let resp = await todoData.updateTodoById(id,req.body);
    res.send(resp);
};


const getalltodos = async (req,res) => {
    let resp = await todoData.getAllTodos();
    res.send(resp);
};

module.exports ={
    createtodo,
    getalltodos,
    updatetodo
}