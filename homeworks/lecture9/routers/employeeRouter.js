const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const {
    createNewEmployee,
    getEmployeeById,
    updateEmployeeById,
    deleteEmployeeById,
    getAllEmployees,
    getAllEmployeesOfCompany,
    getAllEmployeesOfManager
} = require('../controllers/EmployeeController');

//Create a new employee
router.post('/employee', createNewEmployee);

//Get an employee by id
router.get('/employee/:id', auth, getEmployeeById);

//Update an employee by id
router.post('/employee/:id', auth, updateEmployeeById);

//Delete an employee by id
router.delete('/employee/:id', auth, deleteEmployeeById);

//Get all employees
router.get('/employee', auth, getAllEmployees);

//Get all employees of a company
router.get('/company/:id/employee', auth, getAllEmployeesOfCompany);

//Get all employees of a manager
router.get('/Manager/:id/employee', getAllEmployeesOfManager);

module.exports = router;