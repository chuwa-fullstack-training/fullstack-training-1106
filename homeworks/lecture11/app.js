const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { Company, Employee } = require('./models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/companyDB', { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/api/login', async (req, res) => {
  try {
    // console.log(req.body);
    const user = await Employee.findOne({ firstName: req.body.firstName });
    // console.log(user);

    if (!user || !await bcrypt.compare(req.body.lastName, user.lastName)) {
      throw new Error('Unable to login');
    }
    const token = jwt.sign({ _id: user._id.toString() }, 'your_jwt_secret');
    res.send({ user, token });
  } catch (error) {
    res.status(400).send();
  }
});

const auth = async (req, res, next) => {
    console.log('....');
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, 'your_jwt_secret');
    const user = await Employee.findOne({ _id: decoded._id});

    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    next();
};


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
    // Manually invoke the auth middleware
    await auth(req, res, async () => {
      try {
        // If authentication succeeds, fetch and return all employees
        const employees = await Employee.find();
        return res.send(employees);
      } catch (error) {
        // Handle possible errors during fetching all employees
        res.status(500).send(error);
      }
    });
  } catch (e) {
    // If authentication fails, return limited data
    try {
      const employees = await Employee.find().select('firstName lastName');
      res.send(employees);
    } catch (error) {
      // Handle possible errors during fetching limited employee data
      res.status(500).send(error);
    }
  }
});


app.get('/companies/:companyId/employees', async (req, res) => {
  // Manually invoke the auth middleware
  await auth(req, res, async (err) => {
    if (!err) {
      // If authentication succeeds
      try {
        // Check if the authenticated user belongs to the requested company
        if (req.user.company.toString() !== req.params.companyId) {
          return res.status(403).send({ error: 'Access denied - User does not belong to this company' });
        }

        // Retrieve and return the employees of the company
        const employees = await Employee.find({ company: req.params.companyId });
        return res.json(employees);
      } catch (error) {
        // Handle errors during employee retrieval
        return res.status(500).send({ error: error.message });
      }
    } else {
      // If authentication fails, decide on the action (e.g., send limited data or deny access)
      return res.status(401).send({ error: 'Authentication required' });
    }
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
