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
  startDate: Date,
  jobTitle: String,
  resigned: Boolean,
  salary: Number,
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
