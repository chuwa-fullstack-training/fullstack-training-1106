const mongoose = require('./connect');
const { Company, Employee } = require('./schema');
const express = require('express');
const router = express.Router();

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


router.get('/employees/:id', (req, res) => {
  const id = req.params.id;
  console.log("id: ", id);
  if (!id) {
    return res.status(400).send("Invalid URL, please input employee ID");
  }
  Employee.findById(id)
    .then(employee => {
      console.log(employee);
      res.json(employee);
    })
    .catch(err => {
      console.log('Error finding employee', err);
      res.status(400).send("Error finding employee")
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


router.get('/employees', (req, res) => {
  Employee.find()
    .then(employee => {
      console.log(employee);
      res.json(employee);
    })
    .catch(err => {
      console.log('Error finding employee', err);
      res.status(400).send("Error finding employee")

    });
})


router.get('/employees/companies/:companyId', (req, res) => {
  const companyId = req.params.companyId;
  console.log("companyId: ", companyId)
  Employee.find({ company: companyId })
    .then(employee => {
      console.log("employee of company: ", employee);
      res.json(employee);
    })
    .catch(err => {
      console.log('Error finding employee', err);
      res.status(400).send("Error finding employee")

    });
})


module.exports = router;
