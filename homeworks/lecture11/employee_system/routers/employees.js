const express = require('express');
const {
  // getAllEmployees,
  getOneEmployeePartial,
  // getOneEmployee,
  // getAllEmployeesByCompany,
  createEmployee,
  updateEmployee,
  deleteEmployee
} = require('../controllers/employee');
const auth = require('../middlewares/auth');
const CustomAPIError = require('../errors');
const router = express.Router();

router.get('/employees', auth, () => { 
  throw new CustomAPIError("No authorization to get all employees.", 401)
});

router.get('/employees/:id', auth, getOneEmployeePartial);

// router.get('/companies/:id/employees', getAllEmployeesByCompany);

router.post('/employees', createEmployee);

router.put('/employees/:id', updateEmployee);

router.delete('/employees/:id', deleteEmployee);

module.exports = router;