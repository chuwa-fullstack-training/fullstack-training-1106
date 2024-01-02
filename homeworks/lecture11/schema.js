// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const { Schema } = mongoose;

function createCompanySchema(){
   
    return new Schema({
    name:{
        type: String,
    },
    description:{
        type: String,
    },
    headquarters:{
        type: String,
    },
    industry:{
        type: String, 
    },
    employees:[{
        type: Schema.Types.ObjectId,
        ref: 'Employee'
    }]
});
}

function createEmployeeSchema(){
   
 return  new Schema({
    firstName:{
        type: String,
    },
    lastName: {
        type: String,
    },
    company:{
        type: Schema.Types.ObjectId,
        ref: 'Company',
    },
    startDate:{
        type: Date,
        default: Date.now,
    },
    jobTitle:{
        type: String,
    },
    resigned:{
        type: Boolean
    },
    salary:{
        type: Number,

    },
    manager:{
        
    }
});
}

const companySchema = createCompanySchema();
const employeeSchema = createEmployeeSchema();

const Employee = mongoose.model('Employee', employeeSchema);
const Company = mongoose.model('Company', companySchema);
module.exports = {
    Employee,
    Company
};