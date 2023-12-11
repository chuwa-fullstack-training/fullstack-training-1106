const express = require('express');
const router = express.Router();
const Company = require('./Company');
const Employee = require('./Employee');

// Define API routes here
// Create a new company
router.post('/company', async (req, res) => {
  try {
    const newCompany = new Company(req.body);
    const savedCompany = await newCompany.save();
    res.status(201).json(savedCompany);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Create a New Employee
router.post('/employee', async (req, res) => {
    try {
        const newEmployee = new Employee(req.body);
        const savedEmployee = await newEmployee.save();
        res.status(201).json(savedEmployee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a Company by ID
router.get('/company/:id', async (req, res) => {
    try {
        const company = await Company.findById(req.params.id).populate('employees');
        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.json(company);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get an Employee by ID
router.get('/employee/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id).populate('company').populate('manager');
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a Company by ID
router.put('/company/:id', async (req, res) => {
    try {
        const updatedCompany = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCompany) {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.json(updatedCompany);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update an Employee by ID
router.put('/employee/:id', async (req, res) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json(updatedEmployee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get all subordinates of a manager:
router.get('/employee/:id/subordinates', async (req, res) => {
    try {
        const manager = await Employee.findById(req.params.id).populate('subordinates');
        if (!manager) {
            return res.status(404).json({ message: 'Manager not found' });
        }
        res.json(manager.subordinates);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a Company by ID
router.delete('/company/:id', async (req, res) => {
    try {
        const deletedCompany = await Company.findByIdAndDelete(req.params.id);
        if (!deletedCompany) {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.json({ message: 'Company deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete an Employee by ID
router.delete('/employee/:id', async (req, res) => {
    try {
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
        if (!deletedEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json({ message: 'Employee deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get All Companies
router.get('/companies', async (req, res) => {
    try {
        const companies = await Company.find({});
        res.json(companies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get All Employees
router.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.find({}).populate('company').populate('manager');
        res.json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get All Employees of a Company
router.get('/company/:id/employees', async (req, res) => {
    try {
        const company = await Company.findById(req.params.id).populate('employees');
        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.json(company.employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});




module.exports = router;
