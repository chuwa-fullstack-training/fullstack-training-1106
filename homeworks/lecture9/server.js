const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

// Schema
const Company = require("./schema").Company;
const Employee = require("./schema").Employee;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

/* Routes */
const companyRouter = express.Router();
const employeeRouter = express.Router();

// Company
// Create a new company
companyRouter.post("/", (req, res) => {
  const { name, description, headquarters, industry, _employees } = req.body;
  const company = new Company({
    name: name,
    description: description,
    headquarters: headquarters,
    industry: industry,
    _employees: _employees,
  });
  company
    .save()
    .then((newCompany) => {
      console.log("Company created");
      res.status(201).json(newCompany);
    })
    .catch((err) => {
      console.log("Error saving user", err);
      res.status(400).json({ message: "Company Created Fail" });
    });
});
// Get company by id
companyRouter.get("/:id", (req, res) => {
  const ID = req.params.id;
  Company.findById(ID)
    .then((company) => {
      console.log(company);
      res.status(200).json(company);
    })
    .catch((err) => {
      console.log("Error finding company", err);
      res.status(400).json({ message: "Company found Fail" });
    });
});
// Update company by id
companyRouter.put("/:id", (req, res) => {
  const ID = req.params.id;
  Company.findById(ID)
    .then((company) => {
      company.name = req.body.name ?? company.name;
      company.description = req.body.description ?? company.description;
      company.headquarters = req.body.headquarters ?? company.headquarters;
      company.industry = req.body.industry ?? company.industry;
      company._employees = req.body._employees ?? company._employees;
      company.save();
      res.status(200).json(company);
    })
    .catch((err) => {
      console.log("Error updating company", err);
      res.status(400).json("Error updated fail");
    });
});
// Delete company by id
companyRouter.delete("/:id", (req, res) => {
  const ID = req.params.id;
  Company.findByIdAndDelete(ID)
    .then(res.status(204).json("company deleted"))
    .catch((err) => {
      res.status(500).json("Server Error");
    });
});
// Get all companies
companyRouter.get("/", (req, res) => {
  Company.find()
    .then((companies) => {
      console.log(companies);
      res.status(200).json(companies);
    })
    .catch((err) => {
      console.log("Error finding all companies", err);
      res.status(400).json("Error found all fail");
    });
});

// Employee
// Create a new Employee
employeeRouter.post("/", (req, res) => {
  const {
    firstName,
    lastName,
    startDate,
    company,
    jobTitle,
    resigned,
    salary,
    _manager,
  } = req.body;
  const employee = new Employee({
    firstName: firstName,
    lastName: lastName,
    company: company,
    startDate: startDate,
    jobTitle: jobTitle,
    resigned: resigned,
    salary: salary,
    _manager: _manager,
  });
  employee
    .save()
    .then((newEmployee) => {
      console.log("Employee created");
      Company.findById(company).then((c) => {
        c._employees = [...c._employees, newEmployee._id];
        c.save();
      });
      res.status(201).json(newEmployee);
    })
    .catch((err) => {
      console.log("Error saving employee", err);
      res.status(400).json({ message: "Employee Created Fail" });
    });
});
// Get an employee by id
employeeRouter.get("/:id", (req, res) => {
  const ID = req.params.id;
  Employee.findById(ID)
    .then((employee) => {
      console.log(employee);
      res.status(200).json(employee);
    })
    .catch((err) => {
      console.log("Error getting employee", err);
      res.status(400).json({ message: "Employee found Fail" });
    });
});

// Update an employee by id
employeeRouter.put("/:id", (req, res) => {
  const ID = req.params.id;
  Employee.findById(ID)
    .then((employee) => {
      employee.firstName = req.body.firstName ?? employee.firstName;
      employee.lastName = req.body.lastName ?? employee.lastName;
      employee.company = req.body.company ?? employee.company;
      employee.startDate = req.body.startDate ?? employee.startDate;
      employee.jobTitle = req.body.jobTitle ?? employee.jobTitle;
      employee.resigned = req.body.resigned ?? employee.resigned;
      employee.salary = req.body.salary ?? employee.salary;
      employee._manager = req.body._manager ?? employee._manager;
      employee.save();
      res.status(200).json(employee);
    })
    .catch((err) => {
      console.log("Error updating employee", err);
      res.status(400).json("Error updated fail");
    });
});
// Delete an employee by id
employeeRouter.delete("/:id", (req, res) => {
  const ID = req.params.id;
  Employee.findByIdAndDelete(ID)
    .then(res.status(204).json("employee deleted"))
    .catch((err) => {
      res.status(500).json("Server Error");
    });
});

// Get all employees

employeeRouter.get("/", (req, res) => {
  Employee.find()
    .then((employees) => {
      console.log(employees);
      res.status(200).json(employees);
    })
    .catch((err) => {
      console.log("Error finding all employees", err);
      res.status(400).json("Error found all fail");
    });
});

// Get all employees of a company
companyRouter.get("/:id/employees", (req, res) => {
  const ID = req.params.id;
  Company.findById(ID)
    .then((company) => {
      res.status(200).json(company._employees);
    })
    .catch((err) => {
      console.log("Error finding all employees of the company", err);
      res.status(500).json("Error found all employees of the company");
    });
});

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use("/company", companyRouter);
app.use("/employee", employeeRouter);

app.listen(3000, () => console.log("Listening to port 3000"));
