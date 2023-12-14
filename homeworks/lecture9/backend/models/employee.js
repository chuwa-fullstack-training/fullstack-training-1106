const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    firstName: String,
    lastName: String,
    company: { type: Schema.Types.ObjectId, ref: 'Company' }, // 引用Company模型
    startDate: Date,
    jobTitle: String,
    resigned: Boolean,
    salary: Number,
    manager: { type: Schema.Types.ObjectId, ref: 'Employee', required: false } 
});

EmployeeSchema.virtual('subordinates', {
    ref: 'Employee',
    localField: '_id',
    foreignField: 'manager'
});

module.exports = mongoose.model('Employee', EmployeeSchema);