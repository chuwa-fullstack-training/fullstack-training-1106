const mongoose = require('mongoose');
const { Schema } = mongoose;

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

const Employee = mongoose.model('Employee', employee);
module.exports = Employee;