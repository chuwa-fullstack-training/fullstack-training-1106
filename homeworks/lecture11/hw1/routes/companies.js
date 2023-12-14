const express = require('express');
const companyR = express.Router();
const auth = require("../middlewares/auth");

const {createCompany,getCompanyById,updateCompanyById,deleteCompanyById,getAllCompanies,getAllEmployeesOfCompany} = require('../crud/companies');

//Create
companyR.post('/companies', auth, createCompany);

//Get by id
companyR.get('/companies/:id', auth, getCompanyById);

//Update by id
companyR.put('/companies/:id', auth, updateCompanyById);

//Delete by id
companyR.delete('/companies/:id', auth, deleteCompanyById);

//Get all companies
companyR.get('/companies', auth, getAllCompanies);

//Get all employees of a company
companyR.get('/companies/:id/employees', auth, getAllEmployeesOfCompany);

module.exports = companyR;