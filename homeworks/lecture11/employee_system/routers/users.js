const express = require('express');
const {
  getOneEmployee,
  getAllEmployeesByCompany,
} = require('../controllers/employee');

const router = express.Router();

router.get('/users/:login/employees', getAllEmployeesByCompany);

router.get('/users/:login/employees/:id', getOneEmployee);


module.exports = router;