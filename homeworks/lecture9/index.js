const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());
const {
  createCompany,
  findCompanyById,
  updateCompanyById,
  deleteCompanyById,
  findAllCompanies,
} = require("./api/Company");

const {
  createEmployee,
  findEmployeeById,
  updateEmployeeById,
  deleteEmployeeById,
  findAllEmployees,
} = require("./api/Employee");

mongoose.connect(
  "mongodb+srv://yiqianya:icVUpbcXfX6NEcuW@cluster0.skhgha7.mongodb.net/"
);

app.get("/company", async (req, res) => {
  try {
    const companies = await findAllCompanies();
    res.json(companies);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.get("/company/create-company", async (req, res) => {
  try {
    const company = await createCompany(req.body);
    res.status(200).json(company);
  } catch (e) {
    res.status(422).send(e);
  }
});

app.get("/company/:id", async (req, res) => {
  try {
    const company = await findCompanyById();
    res.status(200).json(company);
  } catch (e) {
    res.status(422).send(e);
  }
});

app.put("/company/:id", async (req, res) => {
  try {
    const id = "12345";
    const company = await updateCompanyById(id, req.body);
    res.status(200).json(company);
  } catch (e) {
    res.status(422).send(e);
  }
});

app.delete("/company/:id", async (req, res) => {
  try {
    const id = "12345";
    await deleteCompanyById(id);
    res.status(204).json("Company deleted" + id);
  } catch (e) {
    res.status(422).send(e);
  }
});

app.get("/employee", async (req, res) => {
    try {
      const employees = await findAllEmployees();
      res.json(employees);
    } catch (e) {
      res.status(422).send(e);
    }
  });
  
  app.get("/employee/create-employee", async (req, res) => {
    try {
      const employee = await createEmployee(req.body);
      res.status(200).json(employee);
    } catch (e) {
      res.status(422).send(e);
    }
  });
  
  app.get("/employee/:id", async (req, res) => {
    try {
      const employee = await findEmployeeById();
      res.status(200).json(employee);
    } catch (e) {
      res.status(422).send(e);
    }
  });
  
  app.put("/employee/:id", async (req, res) => {
    try {
      const id = "12345";
      const employee = await updateEmployeeById(id, req.body);
      res.status(200).json(employee);
    } catch (e) {
      res.status(422).send(e);
    }
  });
  
  app.delete("/employee/:id", async (req, res) => {
    try {
      const id = "12345";
      await deleteEmployeeById(id);
      res.status(204).json("Employee deleted" + id);
    } catch (e) {
      res.status(422).send(e);
    }
  });

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
