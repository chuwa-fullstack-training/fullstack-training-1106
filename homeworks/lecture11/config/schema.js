const mongoose = require("mongoose");
const { Schema } = mongoose;

const companySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    headquarters: String,
    industry: String,
    employees: [
      {
        type: Schema.Types.ObjectId,
        ref: "Employee",
      },
    ],
  },
  {
    versionKey: false,
  }
);

const employeeSchema = new Schema(
  {
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: "Company",
    },
    startDate: Date,
    jobTitle: String,
    resigned: Boolean,
    salary: Number,
  },
  {
    versionKey: false,
  }
);

const Company = mongoose.model("Company", companySchema);
const Employee = mongoose.model("Employee", employeeSchema);

module.exports = {
  Company,
  Employee,
};
