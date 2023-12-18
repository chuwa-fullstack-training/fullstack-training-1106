const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/hw', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const employeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    companyId: mongoose.Schema.Types.ObjectId,
    startDate: Date,
    jobTitle: String,
    resigned: Boolean,
    salary: Number,
});
  
const companySchema = new mongoose.Schema({
    name: String,
    description: String,
    headquarters: String,
    industry: String,
});

const Employee = mongoose.model('Employee', employeeSchema);
const Company = mongoose.model('Company', companySchema);

app.use(bodyParser.json());

/*
    /api/company
        -GET Get all companies
        -POST Create a new company
    /api/company/<:id>
        -GET Get a company by id
        -PUT Update a company by id
        -DELETE Delete a company by id
    /api/employee
        -GET Get all employees
        -POST Create a new employee
    /api/employee/<:id>
        -GET Get an employee by id
        -PUT Update an employee by id
        -DELETE Delete an employee by id
    /api/company/<:id>/employees
        -GET Get all employees of a company 
*/

app.get('/api/employees', async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
});

app.post('/api/employees', async (req, res) => {
    const { firstName, lastName, companyId, startDate, jobTitle, resigned, salary } = req.body;
    const newEmployee = new Employee({ firstName, lastName, companyId, startDate, jobTitle, resigned, salary });
    await newEmployee.save();
    res.status(201).json(newEmployee);
});

app.get('/api/employees/:id', async (req, res) => {
    const employeeId = req.params.id;
    const employee = await Employee.findById(employeeId);

    if (!employee) {
        res.status(404).json({ message: 'Employee not found' });
        return;
    }

    res.json(employee);
});

app.put('/api/employees/:id', async (req, res) => {
    const employeeId = req.params.id;
    const { firstName, lastName, companyId, startDate, jobTitle, resigned, salary } = req.body;

    const updatedEmployee = await Employee.findByIdAndUpdate(
        employeeId,
        { firstName, lastName, companyId, startDate, jobTitle, resigned, salary }
    );

    if (!updatedEmployee) {
    res.status(404).json({ message: 'Employee not found' });
    return;
    }

    res.json({ message: 'Employee updated successfully', updatedEmployee });
});

app.delete('/api/employees/:id', async (req, res) => {
    const employeeId = req.params.id;
    const deletedEmployee = await Employee.findByIdAndDelete(employeeId);

    if (!deletedEmployee) {
        res.status(404).json({ message: 'Employee not found' });
        return;
    }

    res.json({ message: 'Employee deleted successfully', deletedEmployee });
});

app.get('/api/companies', async (req, res) => {
    const companies = await Company.find();
    res.json(companies);
});

app.post('/api/companies', async (req, res) => {
    const { name, description, headquarters, industry } = req.body;
    const newCompany = new Company({ name, description, headquarters, industry });
    await newCompany.save();
    res.status(201).json(newCompany);
});

app.get('/api/companies/:id', async (req, res) => {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);

    if (!company) {
        res.status(404).json({ message: 'Company not found' });
        return;
    }
    res.json(company);
});

app.put('/api/companies/:id', async (req, res) => {
    const companyId = req.params.id;
    const { name, description, headquarters, industry } = req.body;

    const updatedCompany = await Company.findByIdAndUpdate(
        companyId,
        { name, description, headquarters, industry }
    );

    if (!updatedCompany) {
    res.status(404).json({ message: 'Company not found' });
    return;
    }

    res.json({ message: 'Company updated successfully', updatedCompany });
});

app.delete('/api/companies/:id', async (req, res) => {
    const companyId = req.params.id;
    const deletedCompany = await Company.findByIdAndDelete(companyId);

    if (!deletedCompany) {
        res.status(404).json({ message: 'Company not found' });
        return;
    }

    // delete associated employees
    await Employee.deleteMany({ companyId });

    res.json({ message: 'Company and associated employees deleted successfully', deletedCompany });
});

app.get('/api/companies/:companyId/employees', async (req, res) => {
    const companyId = req.params.companyId;
    const employees = await Employee.find({ companyId });
    res.json(employees);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});