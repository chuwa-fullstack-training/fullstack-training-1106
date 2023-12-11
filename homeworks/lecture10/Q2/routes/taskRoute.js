const express = require('express');
const router = express.Router();
const Task = require('../models/taskModel');

// Display all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.render('index', { tasks });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new task
router.post('/', async (req, res) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const newTask = await task.save();
    res.status(201).redirect('/tasks');
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Other routes for updating and deleting tasks

module.exports = router;
