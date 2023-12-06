const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    id:{
        type: Number,
        required: true,
        unique: true
    },
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

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;