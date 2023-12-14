const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  done: {
    type: Boolean,
    require: true,
  },
});
const todo = mongoose.model("todo", todoSchema);
module.exports = todo;
