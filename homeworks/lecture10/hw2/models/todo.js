const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  todo: String,
  done: Boolean
});

module.exports = mongoose.model('Todo', todoSchema);
