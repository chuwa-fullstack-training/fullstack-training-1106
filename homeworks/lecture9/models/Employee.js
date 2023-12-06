const mongoose = require('mongoose');
const {Schema} = mongoose;

const EmployeeSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    company: {
        type: Schema.Types.ObjectId,
        required: true,
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
        type: Number,
        required: true
    },
    _manager:
    {
        type: Schema.Types.ObjectId,
        default: ''
    }
});

const Employee = mongoose.model('Employee', EmployeeSchema);

module.exports = Employee;