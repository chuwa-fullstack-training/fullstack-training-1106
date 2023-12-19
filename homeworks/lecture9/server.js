const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./connect.js');
const Company = require('./schema.js').Company;
const Employee = require('./schema.js').Employee;

const app = express();
const port = 3000;

connectDB();

const databaseOperation = async ()=>{

    const company1 = new Company({
        name: 'Chuwa',
        description: 'IT consulting',
        headquarters: 'Chu Wa',
        employees: []
    });
    const company2 = new Company({
        name: 'Apple',
        description: 'mobile manufacture',
        headquarters: 'Steven Jobs',
        employees: []
    });
    
    const employee1 = new Employee({
        firstName: 'Donna',
        lastName: 'Zhou',
        company: company1,
        startDate: new Date(),
        jobTitle: 'SWE',
        resigned: false,
        salary: 5000,
    });
    const employee2 = new Employee({
        firstName: 'Qingyu',
        lastName: 'Zhou',
        company: company2,
        startDate: new Date(),
        jobTitle: 'SWE',
        resigned: false,
        salary: 1000,
    });
    const employee3 = new Employee({
        firstName: 'Jack',
        lastName: 'Zhang',
        company: company2,
        startDate: new Date(),
        jobTitle: 'SWE',
        resigned: false,
        salary: 1000,
    });

//Create a new company  
    await company1.save();
    await company2.save();
//Create a new employee
    await employee1.save();
    await employee2.save();
    await employee3.save();

    //add employees to the companies
    await Company.updateOne({_id: company1._id}, { $push: { employees: employee1._id}});
    await Company.updateOne({_id: company2._id}, { $push: { employees: employee2._id}});
    
    //get employee by id
    await Employee.findById(employee1._id)
    .then(employee => {
        console.log(`Get employee by id ${employee1._id.toString()} is: ${employee}`);
    })
    .catch(err =>{
        console.error("Error in geting employee by id");
    })

    //get company by id
    await Company.findById(company1._id)
    .then(company => {
        console.log(`Get company by id ${company1._id.toString()} is: ${company}`);
    })
    .catch(err =>{
        console.error("Error in geting company by id");
    })

    //update companies by id
    await Company.updateOne({_id: company2._id}, { $set: { headquarters: 'Tim Cook'}});

    //update employees by id
    await Employee.updateOne({_id: employee2._id}, { $set: { salary: '4000', resigned: true}});
    
    //delete company by id 
    await Company.deleteOne({_id: company1._id});
    //delete employee by id 
    await Employee.deleteOne({_id: employee1._id});

    //get all companies
    await Company.find()
    .then(companies => {
        console.log("companies: ",companies);
    })
    .catch(err => {
        console.error("Error in finding all companies")
    })

    //get all employees
    await Employee.find()
    .then(employees =>{
        console.log("All employees: ",employees)
    })
    .catch(err =>{
        console.error("error happens in find employees")
    })

    //Get all employees of a company
    const employees_of_company2 = await Employee.find({company: company2});
    console.log('all employees_of_company2: ',employees_of_company2);
}

//clean database by deleting all documents
const deleteAllDocuments = async()=>{
    try{
        await Company.deleteMany({});
        await Employee.deleteMany({});
        console.log("All documents are deleted");
    }catch(e){
        console.error("Error happnes in deleteAllDocuments");
    }
}

//run the code
const run = async() =>{
    await databaseOperation();

    await deleteAllDocuments();
}
run();
