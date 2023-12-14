const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todo: {
        type: String,
        required: true
    },
    finished: {
        type: Boolean,
        default: false
    }
})

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo