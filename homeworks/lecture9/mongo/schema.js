const mongoose = require('mongoose');
const { Schema } = mongoose;


//The Company schema should have the following fields:

// - name: String
// - description: String
// - headquarters: String
// - industry: String
// - _employees: [EmployeeSchema]_

const companySchema = new Schema({
    name : {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: 'No description provided.'
    },
    headquarters: {
        type: String,
    },
    industry: {
        type: String,
    },
    _employees: [{
        type: Schema.Types.ObjectId,
        ref: 'Employee'
    }]
});

// The Employee schema should have the following fields:

// - firstName: String
// - lastName: String
// - company: CompanySchema
// - startDate: Date
// - jobTitle: String
// - resigned: Boolean
// - salary: Number
// - _manager: EmployeeSchema_ (optional)

const employeeSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        require: true
    },
    companyID: {
        type: Schema.Types.ObjectId,
        ref: 'Company'
    },
    startDate: {
        type: Date,
        default: Date.now()
    },
    jobTitle: {
        type: String,
        required: true
    },
    resigned: {
        type: Boolean,
        default: false
    },
    salary: {
        type: Number,
        default: 0
    },
    _managerId: {
        type: Schema.Types.ObjectId,
        ref: 'Employee'
    }
});

const Company = mongoose.model('Company', companySchema);
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = {
    Company,
    Employee
};