const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const taskSchema = new mongoose.Schema({
    name: String,
    datetime: Date,
    location: String,
    completed: Boolean,
    description: String,
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
