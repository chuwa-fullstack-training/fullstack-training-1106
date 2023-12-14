const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    done: {
        type: Boolean,
        default: false
    }
});

const Todo = mongoose.model('Todo', todoSchema);
module.exports = {
    Todo
}