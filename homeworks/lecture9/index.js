const mongoose = require('./connect.js');
const createCompany = require('./create-company.js');
const createEmployee = require('./create-employee.js');
const findCompanyById = require('./find-company.js');
const findEmployeeById = require('./find-employee.js');
const updateCompanyById = require('./update-company.js');
const updateEmployeeById = require('./update-employee.js');
const deleteCompanyById = require('./delete-company.js');
const deleteEmployeeById = require('./delete-employee.js');
const findAllEmployees = require('./find-all-employees.js');
const findAllCompanies = require('./find-all-companies.js');
const findEmployeesByCompany = require('./find-employees-by-company.js');
//createCompany({ name: "Apple" });
//createEmployee({ firstName: "Jenny", lastName: "Charlotte" });
//findCompanyById().then((c) => c.populate('_employees')).then((c) => console.log(c)).finally(() => mongoose.disconnect());
//findEmployeeById().then((c) => c.populate('company')).then((c) => console.log(c)).finally(mongoose.disconnect);
//updateCompanyById('656ff97366c94deac1f8cda6', { name: "ByteDance", _employees: ['657003909e8f8de17b238d64', '6570154491d7512880c24379'] }).then((c) => console.log(c)).finally(mongoose.disconnect);
//updateEmployeeById('657003909e8f8de17b238d64', { firstName: "Sam", company: "656ff97366c94deac1f8cda6" }).then((c) => console.log(c)).finally(mongoose.disconnect);
//updateEmployeeById('6570154491d7512880c24379', { company: "656ff97366c94deac1f8cda6" }).then((c) => console.log(c)).finally(mongoose.disconnect);
//deleteCompanyById('656ff827187218a48cdaa77b').then((c) => console.log(c)).finally(mongoose.disconnect);
//deleteEmployeeById('65701356057a750dcc9e93dae').then((c) => console.log(c)).finally(mongoose.disconnect);
//findAllEmployees().then((e) => JSON.parse(JSON.stringify(e))).then((e) => console.log(e));
//findAllCompanies().then((e) => JSON.parse(JSON.stringify(e))).then((e) => console.log(e));
//findEmployeesByCompany('656ff97366c94deac1f8cda6').then((e) => console.log(e));

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/employees", async (req, res) => {
    try {
        const employee = await createEmployee(req.body);
        res.status(201).json(employee);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

app.post("/companies", async (req, res) => {
    try {
        const company = await createCompany(req.body);
        res.status(201).json(company);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

app.get("/employees", async (_, res) => {
    try {
        const employees = await findAllEmployees();
        res.json(employees);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

app.get("/companies", async (_, res) => {
    try {
        const companies = await findAllCompanies();
        res.json(companies);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

app.put("/employees/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const employee = await updateEmployeeById(id, req.body);
        res.json(employee);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

app.put("/companies/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const company = await updateCompanyById(id, req.body);
        res.json(company);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

app.get("/employees/company/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const employees = await findEmployeesByCompany(id);
        res.json(employees);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

app.get("/employees/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const employee = await findEmployeeById(id);
        res.json(employee);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

app.get("/companies/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const company = await findCompanyById(id);
        res.json(company);
    } catch (e) {
        res.status(500).send(e.message);
    }
});

app.delete("/companies/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await deleteCompanyById(id);
        res.status(204).json({ message: 'Company deleted' });
    } catch (e) {
        res.status(500).send(e.message);
    }
});

app.delete("/employees/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await deleteEmployeeById(id);
        res.status(204).json({ message: 'Employee deleted' });
    } catch (e) {
        res.status(500).send(e.message);
    }
});

app.all("*", (_, res) => {
    res.status(404).send('this is the 404 page');
});

app.listen(4000, () => console.log("listening on 4000"));