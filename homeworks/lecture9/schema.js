// Create a set of APIs to manage employees and companies. The data should be stored in MongoDB. The API should support the following operations:

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
const mongoose = require('mongoose');
const { Schema } = mongoose;

const companySchema = new Schema({
    name: String,
    description: String,
    headquarters: String,
    industry: String,
    _employees: [{ type: Schema.Types.ObjectId, ref: 'Employee' }]
    });

const employeeSchema = new Schema({
    firstName: String,
    lastName: String,
    companyId: { type: Schema.Types.ObjectId, ref: 'Company' },
    startDate: Date,
    jobTitle: String,
    resigned: Boolean,
    salary: Number
    });

const Company = mongoose.model('Company', companySchema);
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = {
    Company,
    Employee
    };
    
