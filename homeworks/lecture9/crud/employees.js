const Company = require('../models/company');
const Employee = require('../models/employee');

// Create a new employee
const createEmployee = async (req, res) => {
    try {
        const employee = await Employee.create(req.body);
        res.status(201).json(employee);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
};

// Get an employee by id
const getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.employeeId);
        if (!employee) {
          return res.status(404).json({ message: 'Employee not found' });
        }
        res.json(employee);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
};

// Update an employee by id
const updateEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.employeeId, req.body, { new: true });
        if (!employee) {
          return res.status(404).json({ message: 'Employee not found' });
        }
        res.json(employee);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
};

// Delete an employee by id
const deleteEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.employeeId);
        if (!employee) {
          return res.status(404).json({ message: 'Employee not found' });
        }
        res.json({ message: 'Employee deleted successfully' });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
};

// Get all employees
const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
};

module.exports = {createEmployee,getEmployeeById,updateEmployeeById,deleteEmployeeById,getAllEmployees};