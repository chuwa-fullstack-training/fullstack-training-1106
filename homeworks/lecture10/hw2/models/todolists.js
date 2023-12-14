const mongoose = require('mongoose');
const { Schema } = mongoose;

const toDoSchema = new Schema({
  todo:{
    type: String,
    required: true
},
  checked:{
      type: Boolean,
      required: true,
      default: false
  }
});

const Todolists = mongoose.model("Todo", toDoSchema);

module.exports = Todolists;