const mongoose = require("mongoose");
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
    headquarters: {
        type: String,
        default: "San Francisco"
    },
    industry: {
        type: String,
        default: 'entertainment'
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
        type: String,
        required: true
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: 'Company'
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    jobTitle: {
        type: String,
        default: "Software Engineer"
    },
    resigned: {
        type: Boolean,
        default: false
    },
    salary: {
        type: Number,
        default: 70000
    }
});


const Company = mongoose.model('Company', companySchema);
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = {
    Company,
    Employee
}