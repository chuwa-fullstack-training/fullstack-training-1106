const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
    startDate: Date,
    jobTitle: String,
    resigned: Boolean,
    salary: Number,
    manager: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
});

module.exports = mongoose.model('Employee', employeeSchema);
