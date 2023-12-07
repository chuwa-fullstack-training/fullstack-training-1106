const express = require('express');
const {
    createEmployee,
    getOneEmployee,
    updateEmployee,
    deleteEmployee,
    getAllEmployees,
    getAllEmployeesofCompany
} = require('../controllers/employee');

const router = express.Router();

router.post('/employees', createEmployee);
router.get('/employees/:id', getOneEmployee);
router.put('/employees/:id', updateEmployee);
router.delete('/employees/:id', deleteEmployee);
router.get('/employees', getAllEmployees);
router.get('/employees/:id', getAllEmployeesofCompany);

module.exports = router;
