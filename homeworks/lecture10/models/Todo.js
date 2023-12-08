const mongoose = require('mongoose');
const { Schema } = mongoose;

const todo = new Schema({
    description: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    }
});

const Todo = mongoose.model('Todo', todo);

module.exports = Todo;