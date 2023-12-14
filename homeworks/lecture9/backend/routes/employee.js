const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');
// default route "/employee"
router.post('/', employeeController.createEmployee);
router.get('/', employeeController.getAllEmployees);
router.get('/:id', employeeController.getEmployeeById);
router.put('/:id', employeeController.updateEmployeeById);
router.delete('/:id', employeeController.deleteEmployeeById);
router.get(':id/subordinates', employeeController.getAllSubordinates);

module.exports = router;