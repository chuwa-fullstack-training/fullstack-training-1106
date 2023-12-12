const mongoose = require('mongoose');

//- firstName: String
// - lastName: String
// - company: CompanySchema
// - startDate: Date
// - jobTitle: String
// - resigned: Boolean
// - salary: Number
// - _manager: EmployeeSchema_ (optional)

const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },
    startDate: {
        type: Date,
        default: Date.now
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
        type: Number
    },
    _managerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    }
});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;