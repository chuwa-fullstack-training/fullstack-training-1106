const mongoose = require("mongoose");
const { Schema } = mongoose;

const todoSchema = new Schema({
  name: String,
  status: {
    type: Boolean,
    default: false,
  },
});

const todoModel = mongoose.model("Todo", todoSchema);
module.exports = todoModel;
