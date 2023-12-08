const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
    todo:{
        type: String,
        required: true
    },
    done:{
        type: Boolean,
        required: true,
        default: false
    }
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;