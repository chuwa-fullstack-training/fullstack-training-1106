const mongoose = require('mongoose');
const { Schema } = mongoose;

// Todo schema 
const todoSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    finish: {
        type: Boolean,
        default: false
    },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
