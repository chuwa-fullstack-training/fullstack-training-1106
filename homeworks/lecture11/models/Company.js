const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    headquarter: {
        type: String,
    },
    industry: {
        type: String,
    },
    _employees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    }]
});

const Company = mongoose.model('Company', companySchema);
module.exports = Company;