const express = require('express');
const {
    createEmployee,
    getOneEmployee,
    updateEmployee,
    deleteEmployee,
    getAllEmployees,
    getAllEmployeesofCompany
} = require('../controllers/employee');

const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/employees', createEmployee);
router.get('/employees/:id', auth, getOneEmployee);
router.put('/employees/:id', auth, updateEmployee);
router.delete('/employees/:id', auth, deleteEmployee);
router.get('/employees', auth, getAllEmployees);
router.get('/employees/company/:companyId', auth, getAllEmployeesofCompany);

module.exports = router;
