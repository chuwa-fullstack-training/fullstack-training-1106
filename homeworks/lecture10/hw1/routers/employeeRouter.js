const express = require('express');
const router = express.Router();
const {
  getAllEmployees,
  getOneEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployeeByCompanyId
} = require('../controllers/employee'); // Adjust the path as per your project structure

// Get all employees
router.get('/', getAllEmployees);

// Get a single employee by ID
router.get('/:id', getOneEmployee);

router.get('/company/:companyId', getEmployeeByCompanyId);

// Create a new employee
router.post('/', createEmployee);

// Update an employee by ID
router.put('/:id', updateEmployee);

// Delete an employee by ID
router.delete('/:id', deleteEmployee);

module.exports = router;
