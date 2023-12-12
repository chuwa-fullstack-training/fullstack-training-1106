const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { Company, Employee } = require('./models');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/companyDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Company Routes
app.post('/companies', async (req, res) => {
  const company = new Company(req.body);
  try {
    await company.save();
    res.status(201).send(company);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/employees', async (req, res) => {
  const employee = new Employee(req.body);
  try {
    await employee.save();
    res.status(201).send(employee);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/companies', async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).send(companies);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).send(employees);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/companies/:companyId/employees', async (req, res) => {
  try {
    const companyId = req.params.companyId;
    const employees = await Employee.find({ company: companyId });
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).send(error.message);
  }
});


app.get('/companies/:id', async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) {
      return res.status(404).send();
    }
    res.status(200).send(company);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).send();
    }
    res.status(200).send(employee);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put('/companies/:id', async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!company) {
      return res.status(404).send();
    }
    res.status(200).send(company);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!employee) {
      return res.status(404).send();
    }
    res.status(200).send(employee);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete('/companies/:id', async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (!company) {
      return res.status(404).send();
    }
    res.status(200).send(company);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete('/employees/:id', async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) {
      return res.status(404).send();
    }
    res.status(200).send(employee);
  } catch (error) {
    res.status(500).send(error);
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
