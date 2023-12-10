const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
  _id: Number,
  todo: String,
  done: {
    type: Boolean,
    default: false
  }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
  