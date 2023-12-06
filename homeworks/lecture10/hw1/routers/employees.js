const express = require('express');
const {
    getAllEmployees,
    getOneEmployee,
    getEmployeesByCompany,
    createEmployee,
    updateEmployee,
    deleteEmployee
} = require('../controllers/employee');
const router = express.Router();

router.get('/employees', getAllEmployees);

router.get('/employees/:id', getOneEmployee);

router.get('/employees/companies/:id', getEmployeesByCompany);

router.post('/employees', createEmployee);

router.put('/employees/:id', updateEmployee);

router.delete('/employees/:id', deleteEmployee);

module.exports = router;
