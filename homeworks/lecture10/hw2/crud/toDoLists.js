
const ToDo = require('../models/todolists');

// Create
const createToDo = async (req, res) => {
    try {
        const newToDo = await ToDo.create(req.body);
        res.status(201).json(newToDo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get
const getToDo = async (req, res) => {
    try {
        const toDos = await ToDo.find();
        if (!toDos) {
          return res.status(404).json({ message: 'not found' });
        }
        res.json(toDos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update
const updateToDo = async (req, res) => {
    try {
        const todos = await ToDo.findByIdAndUpdate(req.params?.id, req.body, { new: true });
        if (!todos) {
          return res.status(404).json({ message: 'not found' });
        }
        res.json(todos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {createToDo,getToDo,updateToDo};