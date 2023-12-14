const express = require('express');
const toDoListR = express.Router();

const {createToDo,getToDo,updateToDo} = require('../crud/toDoLists');

//Create
toDoListR.post('/api/todolists', createToDo);

//Get 
toDoListR.get('/', getToDo);

//Update
toDoListR.put('/api/todolists/:id', updateToDo);

module.exports = toDoListR;