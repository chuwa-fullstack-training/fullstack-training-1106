const express = require('express');
const router = express.Router();
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
router.get('/employee/:id', getEmployeeById);

//Update an employee by id
router.post('/employee/:id', updateEmployeeById);

//Delete an employee by id
router.delete('/employee/:id' , deleteEmployeeById);

//Get all employees
router.get('/employee', getAllEmployees);

//Get all employees of a company
router.get('/company/:id/employee', getAllEmployeesOfCompany);

//Get all employees of a manager
router.get('/Manager/:id/employee', getAllEmployeesOfManager);

module.exports = router;