const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, default: 'pending' },
  dueDate: Date
});

module.exports = mongoose.model('Todo', TodoSchema);