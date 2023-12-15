const mongoose = require('./connect');
const { Company, Employee } = require('./schema');
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const CustomAPIError = require('./errors');
require('dotenv').config();
const auth = require('./middlewares/auth');

// /auth/login
router.post('/login', async (req, res, next) => {
  const data = req.body;
  try {
    const { username, password } = req.body;
    console.log("username+password: ", username, password);
    let user = await Employee.findOne({ firstName: username });
    console.log("username: ", user);
    if (!user) {
      throw new CustomAPIError('Invalid Credentials', 400);
    }
    if (user.lastName !== password) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    const payload = {
      user: {
        id: user._id
      }
    };
    const token = await jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '30d'
    })
    res.json(token);
  }
  catch (err) {
    next(err);
  }
})

router.get('/employees/id/:id', auth, async (req, res) => {
  try {
    const id = req.params.id;
    console.log("id: ", id);
    if (!id) {
      return res.status(400).send("Invalid URL, please input employee ID");
    }
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(200).json({ message: 'no such an employee' });
    }
    if (req.isAuth) {
      console.log("employee of company: ", employee);
      res.json(employee);
    } else {
      res.json({
        firstName: employee.firstName,
        lastName: employee.lastName
      });
    }
  } catch (err) {
    console.log('Error finding employee', err);
    res.status(400).send("Error finding employee")
  }
})
router.get('/employees', auth, async (req, res) => {
  try {
    const employees = await Employee.find({});
    if (!employees) {
      return res.status(200).send("No Employees found");
    }
    if (req.isAuth) {
      res.json(employees);
    } else {
      const unauth_info = employees.map(emp => ({
        firstName: emp.firstName,
        lastName: emp.lastName
      }));
      res.json(unauth_info);
    }
  }
  catch (err) {
    console.log('Error finding employees', err);
    res.status(400).send("Error finding employees")
  }
})


router.get('/employees/companies', auth, async (req, res) => {
  try {
    if (req.isAuth) {
      console.log("req._id: ", req.user.id);
      const employee = await Employee.findById(req.user.id);
      const companyId = employee.company;
      console.log("companyId: ", companyId);
      const employees = await Employee.find({ company: companyId });
      console.log("employee of company: ", employees);
      res.json(employees);
    } else {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }
  } catch (err) {
    console.log('Error finding employee', err);
    res.status(400).send("Error finding employee")
  }
})


router.post('/companies', (req, res) => {
  const data = req.body;
  if (!data.name) {
    console.log('name of company is required!');
    return res.status(400).send("name of company is required!");
  }
  const company = new Company(data);
  company
    .save()
    .then(() => {
      console.log('Company saved');
      res.status(201).send(company)
    })
    .catch(err => {
      console.log('Error', err);
      res.status(400).send("Invalid company info")
    })
})
router.post('/employees', (req, res) => {
  const data = req.body;
  if (!data.firstName) {
    console.log('firstname of employee is required!');
    return res.status(400).send("firstname of employee is required!");
  }
  const employee = new Employee(data);
  employee
    .save()
    .then(() => {
      console.log('Employee saved');
      res.status(201).send(employee)
    })
    .catch(err => {
      console.log('Error', err);
      res.status(400).send("Invalid employee info")
    })
})

router.get('/companies/:id', (req, res) => {
  const id = req.params.id;
  console.log("id: ", id);
  if (!id) {
    return res.status(400).send("Invalid URL,please input company ID");
  }
  Company.findById(id)
    .then(company => {
      console.log(company);
      res.json(company);
    })
    .catch(err => {
      console.log('Error finding company', err);
      res.status(400).send("Error finding company")
    })
})

router.put('/companies/:id', (req, res) => {
  const id = req.params.id;
  Company.findByIdAndUpdate(id, { $set: req.body }, { new: true })
    .then((company) => {
      if (!company) {
        console.log('Error updating company', err);
        return res.status(404).send("company not found");
      }
      console.log('Company updated');
      res.status(200).send(company)
    })
    .catch(err => {
      console.log('Error updating company', err);
      res.status(400).send("Error updating company")
    })
})
router.put('/employees/:id', (req, res) => {
  const id = req.params.id;
  Employee.findByIdAndUpdate(id, { $set: req.body }, { new: true })
    .then((employee) => {
      if (!employee) {
        console.log('Error updating employee', err);
        return res.status(404).send("employee not found");
      }
      console.log('employee updated');
      res.status(200).send(employee)
    })
    .catch(err => {
      console.log('Error updating employee', err);
      res.status(400).send("Error updating employee")
    })
})

router.delete('/companies/:id', (req, res) => {
  const id = req.params.id;
  Company.findByIdAndDelete(id)
    .then(result => {
      console.log('Company deleted', result);
      res.status(200).send("Company deleted");
    })
    .catch(err => {
      console.log('Error deleting Company', err);
      res.status(400).send("Error deleting company");
    });
})

router.delete('/employees/:id', (req, res) => {
  const id = req.params.id;
  Employee.findByIdAndDelete(id)
    .then(result => {
      console.log('Employee deleted', result);
      res.status(200).send("Employee deleted");
    })
    .catch(err => {
      console.log('Error deleting Employee', err);
      res.status(400).send("Error deleting Employee");
    });
})

router.get('/companies', (req, res) => {
  Company.find()
    .then(companies => {
      console.log(companies);
      res.json(companies);
    })
    .catch(err => {
      console.log('Error finding companies', err);
      res.status(400).send("Error finding company")

    });
})


module.exports = router;
