const express = require("express");
const {
    createEmployee,
    findEmployeeById,
    updateEmployeeById,
    deleteEmployeeById,
    findAllEmployees,
  } = require("../api/Employee");
  

  const router = express.Router();

  router.get('/employees', findAllEmployees);

  router.get('/employees/:id', findEmployeeById);
  
  //router.get('/companies/:id/employees', getAllEmployeesByCompany);
  
  router.post('/employees', createEmployee);
  
  router.put('/employees/:id', updateEmployeeById);
  
  router.delete('/employees/:id', deleteEmployeeById);

  module.exports = router;
  