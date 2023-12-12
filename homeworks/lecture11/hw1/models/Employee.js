const mongoose = require('mongoose');
const { Schema } = mongoose;

// Employee schema
const employeeSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: 'Company',
    },
    startDate: {
        type: Date,
    },
    jobTitle: {
        type: String,
    },
    resigned: {
        type: Boolean,
    },
    salary: {
        type: Number,
    },
    _manager: {
        type: Schema.Types.ObjectId,
        ref: 'Employee',
    }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
