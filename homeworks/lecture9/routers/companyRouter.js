const express = require('express');
const companyRouter = express.Router();
const {
    createCompany,
    getCompanyById,
    updateCompanyById,
    deleteCompanyById,
    getAllCompanies,
    getAllEmployeesOfCompany
} = require('../controllers/companyController');

//Create a new company
companyRouter.post('/companies', createCompany);

//Get a company by id
companyRouter.get('/companies/:id', getCompanyById);

//Update a company by id
companyRouter.put('/companies/:id', updateCompanyById);

//Delete a company by id
companyRouter.delete('/companies/:id' , deleteCompanyById);

//Get all companies
companyRouter.get('/companies',getAllCompanies);

//Get all employees of a company
companyRouter.get('/companies/:id/employees', getAllEmployeesOfCompany);

module.exports = companyRouter;