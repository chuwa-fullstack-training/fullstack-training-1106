const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const todoSchema = new Schema({
  id: {
    type: Number,
    required: true,
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

module.exports = mongoose.model('Todo', todoSchema);
