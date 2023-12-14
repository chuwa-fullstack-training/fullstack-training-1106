const express = require('express');
const employeeR = express.Router();

const {createEmployee,getEmployeeById,updateEmployeeById,deleteEmployeeById,getAllEmployees} = require('../crud/employees');

//Create 
employeeR.post('/employees', createEmployee);

//Get by id
employeeR.get('/employees/:id', getEmployeeById);

//Update by id
employeeR.put('/employees/:id', updateEmployeeById);

//Delete by id
employeeR.delete('/employees/:id' , deleteEmployeeById);

//Get all employees
employeeR.get('/employees', getAllEmployees);

module.exports = employeeR;