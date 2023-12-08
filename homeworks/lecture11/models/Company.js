const mongoose = require('mongoose');
const { Schema } = mongoose;

const company = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: 'This is a default description'
    },
    headquarters: {
        type: String,
        default: ''
    },
    industry: {
        type: String,
        default: ''
    },
    _employees: [{
        type: Schema.Types.ObjectId,
        ref: 'Employee'
    }]
});

const Company = mongoose.model('Company', company);

module.exports = Company;