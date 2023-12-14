const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
  index: {
    type: Number,
    unique: true
  },
  todo: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: false
  }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = {
  Todo
};
