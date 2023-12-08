const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
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
} = require('../controller/methods');
const login = require('../controller/login');

router.post('/login', login);

router.get('/companies', getAllCompanies);

router.get('/companies/:id', getOneCompany);

router.get('/employees', auth, getAllEmployees);

router.get('/employees/:id', auth, getOneEmployee);

router.get('/companies/:id/employees', auth, getEmployeeByCompany);

router.get('/manager/:id/employees', auth, getEmployeesByManager);

router.post('/companies', createCompany);

router.post('/employees', createEmployee);

router.delete('/companies/:id', deleteCompany);

router.delete('/employees/:id', deleteEmployee);

router.put('/companies/:id', updateCompany);

router.put('/employees/:id', updateEmployee);

module.exports = router;
