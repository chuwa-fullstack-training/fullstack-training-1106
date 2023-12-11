const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  firstName: String,
  lastName: String,
  company: { type: Schema.Types.ObjectId, ref: 'Company' },
  startDate: Date,
  jobTitle: String,
  resigned: Boolean,
  salary: Number,
  manager: { type: Schema.Types.ObjectId, ref: 'Employee', required: false }
});

// Virtual field to get employees under a manager
EmployeeSchema.virtual('subordinates', {
    ref: 'Employee',
    localField: '_id',
    foreignField: 'manager'
  });

module.exports = mongoose.model('Employee', EmployeeSchema);
