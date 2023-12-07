const express = require('express');
const router = express.Router();
const { Company, Employee } = require('./schema');

// Create a new company
router.post('/company', async (req, res) => {
    try {
        const company = new Company(req.body);
        await company.save();
        res.status(201).json({ message: 'Company created'});
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

// Create a new employee
router.post('/employee', async (req, res) => {
    try {
        const employee = new Employee(req.body);
        await employee.save();
        res.status(201).json({ message: 'Employee created'});
    } catch (error) {
        res.status(500).send('Server Error');
    }
})

// Get a company by id
router.get('/company/:id', async (req, res) => {
    try {
        const company = await Company.findById(req.params.id);
        if(company) {
            res.json(company);
        } else {
            res.status(404).send('404 not found');
        }
    } catch (error) {
        res.status(500).send('Server Error');
    }
});


// Get an employee by id
router.get('/employee/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if(employee) {
            res.json(employee);
        } else {
            res.status(404).send('404 not found');
        }
    } catch (error) {
        res.status(500).send('Server Error');
    }
});


// Update a company by id
router.put('/company/:id', async (req, res) => {
    try {
        const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(company);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});


// Update an employee by id
router.put('/employee/:id', async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(employee);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});



// Delete a company by id
router.delete('/company/:id', async (req, res) => {
    try {
        await Company.findByIdAndDelete(req.params.id);
        res.json({ message: 'Company deleted' });
    } catch (error) {
        res.status(500).send('Server Error');
    }
});



// Delete an employee by id
router.delete('/employee/:id', async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.json({ message: 'Employee deleted' });
    } catch (error) {
        res.status(500).send('Server Error');
    }
});


// Get all companies
router.get('/company', async (req, res) => {
    try {
        const companies = await Company.find();
        res.json(companies);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});


// Get all employees
router.get('/employee', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});


// Get all employees of a company
router.get('/company/:companyId', async (req, res) => {
    try {
        const employees = await Employee.find({ company: req.params.companyId });
        res.json(employees);
    } catch (error) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
