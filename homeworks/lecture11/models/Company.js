const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
    name: String,
    description: String,
    headquarters: String,
    industry: String,
    _employees: [{ type: Schema.Types.ObjectId, ref: 'Employee' }]
    });
const Company = mongoose.model('Company', companySchema);
module.exports = Company;