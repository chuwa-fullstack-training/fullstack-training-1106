const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const { Company, Employee } = require('./schema');

mongoose.connect('mongodb://127.0.0.1:27017/lecture10', {
     useNewUrlParser: true,
     useUnifiedTopology: true
     })
     .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log('Error connecting to MongoDB', err);
    });

app.post('/api/companies', async (req, res) => {
  try {
    const companyData = req.body;
    const company = await Company.create(companyData);
    res.status(201).json(company);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API to create a new employee
app.post('/api/employees', async (req, res) => {
  try {    
        const employee = new Employee(req.body);
        await employee.save();
        const company = await Company.findById(employee.companyId);
        company._employees.push(employee);
        await company.save();
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API to get a company by id
app.get('/api/companies/:companyId', async (req, res) => {
  try {
    const companyId = req.params.companyId;
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({ error: 'Company not found' });
    }
    res.json(company);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API to get an employee by id
app.get('/api/employees/:employeeId', async (req, res) => {
  try {
    const employeeId = req.params.employeeId;
    const employee = await Employee.findById(employeeId);
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    res.json(employee);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API to update a company by id
app.put('/api/companies/:companyId', async (req, res) => {
  try {
    const companyId = req.params.companyId;
    const companyData = req.body;
    const updatedCompany = await Company.findByIdAndUpdate(companyId, companyData, { new: true });
    if (!updatedCompany) {
      return res.status(404).json({ error: 'Company not found' });
    }
    res.json(updatedCompany);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API to update an employee by id
app.put('/api/employees/:employeeId', async (req, res) => {
  try {
    const employeeId = req.params.employeeId;
    const employeeData = req.body;
    const updatedEmployee = await Employee.findByIdAndUpdate(employeeId, employeeData, { new: true });
    if (!updatedEmployee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    res.json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API to delete a company by id
app.delete('/api/companies/:companyId', async (req, res) => {
  try {
    const companyId = req.params.companyId;
    const deletedCompany = await Company.findByIdAndDelete(companyId);
    if (!deletedCompany) {
      return res.status(404).json({ error: 'Company not found' });
    }
    res.json(deletedCompany);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API to delete an employee by id
app.delete('/api/employees/:employeeId', async (req, res) => {
  try {
    const employeeId = req.params.employeeId;
    const deletedEmployee = await Employee.findByIdAndDelete(employeeId);
    if (!deletedEmployee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    res.json(deletedEmployee);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API to get all companies
app.get('/api/companies', async (req, res) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API to get all employees
app.get('/api/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// API to get all employees of a company
app.get('/api/employees/companies/:companyId', async (req, res) => {
  try {
    console.log(req.params);
    const company = await Company.findById(req.params.companyId);
    const employees = await Employee.find({ companyId: company.id });
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
    

app.listen(3000, () => console.log('Server is listening on port 3000'));