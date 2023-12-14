const mongoose = require('mongoose');
const { Schema } = mongoose;

const CompanySchema = new Schema({
    name: String,
    description: String,
    headquarters: String,
    industry: String,
    employees: [{ 
        type: Schema.Types.ObjectId, ref: 'Employee' 
    }] 
});

module.exports = mongoose.model('Company', CompanySchema);