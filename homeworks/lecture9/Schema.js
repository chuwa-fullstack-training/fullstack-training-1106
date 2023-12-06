// The Company schema should have the following fields:

// - name: String
// - description: String
// - headquarters: String
// - industry: String
// - _employees: [EmployeeSchema]_

// The Employee schema should have the following fields:

// - firstName: String
// - lastName: String
// - company: CompanySchema
// - startDate: Date
// - jobTitle: String
// - resigned: Boolean
// - salary: Number 
// - _manager: EmployeeSchema_ (optional) *

const mongoose = require('mongoose');
const { Schema } = mongoose;

const company = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: 'This is a default description'
    },
    headquarters: {
        type: String,
        default: ''
    },
    industry: {
        type: String,
        default: ''
    },
    _employees: [{
        type: Schema.Types.ObjectId,
        ref: 'Employee'
    }]
});

const employee = new Schema({
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
        ref: 'Company',
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    jobTitle: {
        type: String,
        default: ''
    },
    resigned: {
        type: Boolean,
        default: false
    },
    salary: {
        type: Number,
        default: 80000
    },
    _manager: {
        type: Schema.Types.ObjectId,
        ref: 'Employee',
        default: null
    }
});


const Company = mongoose.model('Company', company);
const Employee = mongoose.model('Employee', employee);

module.exports = {
    Company,
    Employee,
}