const express = require('express');
const router = express.Router();
const {
    getAllCompanies,
    getAllEmployees,
    getOneCompany,
    getOneEmployee,
    getEmployeeByCompany,
    getEmployeesByManager,
    createCompany,
    createEmployee,
    deleteCompany,
    deleteEmployee,
    updateCompany,
    updateEmployee
} = require('../controller/methods')

router.get('/companies', getAllCompanies);

router.get('/companies/:id', getOneCompany);

router.get('/employees', getAllEmployees);

router.get('/employees/:id', getOneEmployee);

router.get('/companies/:id/employees', getEmployeeByCompany);

router.get('/manager/:id/employees', getEmployeesByManager);

router.post('/companies', createCompany);

router.post('/employees', createEmployee);

router.delete('/companies/:id', deleteCompany);

router.delete('/employees/:id', deleteEmployee);

router.put('/companies/:id', updateCompany);

router.put('/employees/:id', updateEmployee);

module.exports = router;
