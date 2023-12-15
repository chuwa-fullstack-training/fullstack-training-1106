const mongoose = require("mongoose");
const { Schema } = mongoose;

const employeeSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: "Company",
  },
  startDate: {
    type: Date,
  },
  jobTitle: {
    type: String,
  },
  resigned: {
    type: Boolean,
    default: false,
  },
  salary: {
    type: Number,
    default: 0,
  },
});

const employeeModel = mongoose.model("Employee", employeeSchema);
module.exports = employeeModel;
