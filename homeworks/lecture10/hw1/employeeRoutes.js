const express = require('express');
const router = express.Router();
const Employee = require('./employee.js');
const Company = require('./company.js');


// Create a new employee
router.post('/', async (req, res) => {
    try {
        const newEmployee = new Employee(req.body);
        const savedEmployee = await newEmployee.save();

        // Update the company's employees array
        const companyId = req.body.company;
        if (companyId) {
            const company = await Company.findById(companyId);
            if (company) {
                company.employees.push(savedEmployee._id);
                await company.save();
            }
        }

        res.status(201).json(savedEmployee);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all employees
router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get an employee by ID
router.get('/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update an employee by ID
router.put('/:id', async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete an employee by ID
router.delete('/:id', async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
