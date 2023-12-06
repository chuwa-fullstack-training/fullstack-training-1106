const mongoose = require('mongoose');
const {Schema} = mongoose;

const CompanySchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    description:{
        type: String,
        default:''
    },
    headquarters:{
        type: String,
        default:''
    },
    industry:{
        type: String,
        default:''
    }
});

const Company = mongoose.model('Company', CompanySchema);

module.exports = Company;