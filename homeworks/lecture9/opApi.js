const express = require('express');
const path = require('path');
const mongoose = require('mongoose'); // Import Mongoose
const app = express();
app.use(express.json());

const { Company, Employee } = require('./schema.js');

const uri = "mongodb://localhost:27017/CompanyDB"; // MongoDB URI
mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/manage.html'));
});


app.post('/companies', async (req, res) => {
    try {
        const company = new Company(req.body);
        company.save();
        res.status(201).send(company);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post('/employees', async (req, res) => {
    try {
        const employee = new Employee(req.body);
        employee.save();
        res.status(201).send(employee);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/companies/company/:id', async (req, res) => {
    try {
        const company = await Company.findById(req.params.id);
        if (!company) {
            return res.status(404).send('Company not found');
        }
        res.send(company);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/companies/employee/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).send('Employee not found');
        }
        res.send(employee);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.put('/companies/company/:id', async (req, res) => {
    const companyId = req.params.id;
    const updates = req.body;

    try {
        const company = await Company.findByIdAndUpdate(companyId, updates, { new: true });
        if (!company) {
            return res.status(404).send('Company not found');
        }
        res.send(company);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.put('/companies/employee/:id', async (req, res) => {
    const employeeId = req.params.id;
    const updates = req.body;

    try {
        const employee = await Employee.findByIdAndUpdate(employeeId, updates, { new: true });
        if (!employee) {
            return res.status(404).send('Employee not found');
        }
        res.send(employee);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.delete('/companies/company/:id', async (req, res) => {
    try {
        const company = await Company.findByIdAndDelete(req.params.id);
        if (!company) {
            return res.status(404).send('Company not found');
        }
        res.send({ message: 'Company deleted successfully' });
    } catch (error) {
        res.status(500).send(error);
    }
});

app.delete('/companies/employee/:id', async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if (!employee) {
            return res.status(404).send('Employee not found');
        }
        res.send({ message: 'Employee deleted successfully' });
    } catch (error) {
        res.status(500).send(error);
    }
});
app.get('/companies/company', async (req, res) => {
    try {
        const companies = await Company.find({});
        res.send(companies);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/companies/employee', async (req, res) => {
    try {
        const employees = await Employee.find({});
        res.send(employees);
    } catch (error) {
        res.status(500).send(error);
    }
});
app.get('/companies/:id/employees', async (req, res) => {
    try {
        const companyId = req.params.id;
        const employees = await Employee.find({ company: companyId });
        console.log(employees);
        res.send(employees);
    } catch (error) {
        res.status(500).send(error);
    }
});
app.listen(3000, () => {
    console.log('Server is up on port 3000');
});