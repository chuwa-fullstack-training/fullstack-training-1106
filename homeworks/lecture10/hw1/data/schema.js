const mongoose = require('mongoose');
const { Schema } = mongoose;

const companySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: 'default content'
  },
  headquarters:{
    type: String
  },
  industry:{
    type: String
  },
  _employees: [{
    type: Schema.Types.ObjectId,
    ref: 'Employee'
  }]
});

const employeeSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String
  },
  company: {
    type: Schema.Types.ObjectId,
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  jobTitle: {
    type: String
  },
  resigned: {
    type: Boolean
  },
  salary: {
    type: Number
  },
  _manager: {
    type: Schema.Types.ObjectId
  }
});

const Company = mongoose.model('Company', companySchema);
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = {
    Company,
    Employee
};
