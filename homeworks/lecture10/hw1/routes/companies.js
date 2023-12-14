const express = require('express');
const companyR = express.Router();

const {createCompany,getCompanyById,updateCompanyById,deleteCompanyById,getAllCompanies,getAllEmployeesOfCompany} = require('../crud/companies');

//Create
companyR.post('/companies', createCompany);

//Get by id
companyR.get('/companies/:id', getCompanyById);

//Update by id
companyR.put('/companies/:id', updateCompanyById);

//Delete by id
companyR.delete('/companies/:id' , deleteCompanyById);

//Get all companies
companyR.get('/companies',getAllCompanies);

//Get all employees of a company
companyR.get('/companies/:id/employees', getAllEmployeesOfCompany);

module.exports = companyR;