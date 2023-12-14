const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema({
    firstName: String,
    lastName: String,
    company: {
      type: Schema.Types.ObjectId,
      ref: "Company",
    },
    startDate: Date,
    jobTitle: String,
    resigned: Boolean,
    salary: Number
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;