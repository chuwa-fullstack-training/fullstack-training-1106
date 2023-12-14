const express = require('express');
const employeeR = express.Router();
const auth = require("../middlewares/auth");

const {createEmployee,getEmployeeById,updateEmployeeById,deleteEmployeeById,getAllEmployees} = require('../crud/employees');

//Create 
employeeR.post('/employees', auth, createEmployee);

//Get by id
employeeR.get('/employees/:id', auth, getEmployeeById);

//Update by id
employeeR.put('/employees/:id', auth, updateEmployeeById);

//Delete by id
employeeR.delete('/employees/:id' , auth, deleteEmployeeById);

//Get all employees
employeeR.get('/employees', auth, getAllEmployees);

module.exports = employeeR;