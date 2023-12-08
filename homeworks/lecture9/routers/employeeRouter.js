const express = require('express');
const employeeRouter = express.Router();
const {
    createEmployee,
    getEmployeeById,
    updateEmployeeById,
    deleteEmployeeById,
    getAllEmployees
} = require('../controllers/employeeController');

//Create a new employee
employeeRouter.post('/employees', createEmployee);

//Get an employee by id
employeeRouter.get('/employees/:id', getEmployeeById);

//Update an employee by id
employeeRouter.put('/employees/:id', updateEmployeeById);

//Delete an employee by id
employeeRouter.delete('/employees/:id' , deleteEmployeeById);

//Get all employees
employeeRouter.get('/employees', getAllEmployees);

module.exports = employeeRouter;