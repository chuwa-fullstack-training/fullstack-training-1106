const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Company = require('./models/Company');
const Employee = require('./models/Employee');

const app = express();
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://damonliren:7TXzVh9L5XKkzgKF@liren.pncnd7y.mongodb.net/');

// Define routes here
const auth = require('./middlewares/auth');
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.post('/api/companies', auth, async (req, res) => {
    try {
        const company = new Company(req.body);
        await company.save();
        res.status(201).json(company);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/employees', async (req, res) => {
    try {
        const employee = new Employee(req.body);
        await employee.save();
        res.status(201).json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/companies/:id', async (req, res) => {
    try {
        const company = await Company.findById(req.params.id).populate('employees');
        if (!company) {
            return res.status(404).json({ error: 'Company not found' });
        }
        res.json(company);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/employees/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id).populate('company');
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/api/companies/:id', async (req, res) => {
    try {
        const updatedCompany = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCompany) {
            return res.status(404).json({ error: 'Company not found' });
        }
        res.json(updatedCompany);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/api/employees/:id', async (req, res) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEmployee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.json(updatedEmployee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/api/companies/:id', async (req, res) => {
    try {
        const deletedCompany = await Company.findByIdAndRemove(req.params.id);
        if (!deletedCompany) {
            return res.status(404).json({ error: 'Company not found' });
        }
        res.json({ message: 'Company deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/api/employees/:id', async (req, res) => {
    try {
        const deletedEmployee = await Employee.findByIdAndRemove(req.params.id);
        if (!deletedEmployee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.json({ message: 'Employee deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/companies', async (req, res) => {
    try {
        const companies = await Company.find({});
        res.json(companies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/employees', async (req, res) => {
    try {
        const employees = await Employee.find({});
        res.json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/companies/:id/employees', async (req, res) => {
    try {
        const company = await Company.findById(req.params.id).populate('employees');
        if (!company) {
            return res.status(404).json({ error: 'Company not found' });
        }
        res.json(company.employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});





