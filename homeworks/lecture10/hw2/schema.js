const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    completed: {
        type: Boolean,
        default: false,
    }
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = {
    Todo,
}