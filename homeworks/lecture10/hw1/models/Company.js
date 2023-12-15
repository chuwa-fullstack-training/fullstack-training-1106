const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
    name: String,
    description: String,
    headquarters: String,
    industry: String,
    employees: [{ type: Schema.Types.ObjectId, ref: 'Employee' }]
});

module.exports = mongoose.model('Company', companySchema);
