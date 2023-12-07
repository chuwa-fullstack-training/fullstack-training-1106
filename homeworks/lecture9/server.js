const express = require('express');
const data = require('./data');
const mongoose = require('mongoose');
const companyData = data.company;
const employeeData = data.employee;
const app = express();

app.use(express.urlencoded({ extended: true }));

// COMPANY API:
app.get('/createcompany', async (req,res) => {
    const {name,description,headquarters,industry} = req.query;
    let resp = await companyData.createCompany(name,description,headquarters,industry);
    res.send(resp);
})
app.get('/create', (req,res) => {
    res.send('This is your create page');
})

app.get('/getcompany/:id', async (req,res) => {
    const id = new mongoose.Types.ObjectId(req.params.id);
    let resp = await companyData.getCompanyById(id);
    res.send(resp);
})

app.get('/updatecompany/:id',async (req,res) => {
    const id = req.params.id;
    let resp = await companyData.updateCompanyById(id,req.query);
    res.send(resp);
})

app.get('/deletecompany/:id',async (req,res) => {
    const id = req.params.id;
    let resp = await companyData.deleteCompanyById(id);
    res.send(resp);
})

app.get('/getallcompanies', async (req,res) => {
    let resp = await companyData.getAllCompanies();
    res.send(resp);
})

//EMPLOYEE API:
app.get('/createemployee', async (req,res) => {
    const {firstName,
        lastName,
        company,
        startDate,
        jobTitle,
        resigned,
        salary,
        _manager} = req.query;
    let resp = await employeeData.createEmployee(firstName,lastName,company,startDate,jobTitle,resigned,salary,_manager);
    res.send(resp);
})

app.get('/getemployee/:id', async (req,res) => {
    const id = new mongoose.Types.ObjectId(req.params.id);
    let resp = await employeeData.getEmployeeById(id);
    res.send(resp);
})

app.get('/updateemployee/:id',async (req,res) => {
    const id = new mongoose.Types.ObjectId(req.params.id);
    let resp = await employeeData.updateEmployeeById(id,req.query);
    res.send(resp);
})

app.get('/deleteemployee/:id',async (req,res) => {
    const id = req.params.id;
    let resp = await employeeData.deleteEmployeeById(id);
    res.send(resp);
})

app.get('/getallemployees', async (req,res) => {
    let resp = await employeeData.getAllEmployees();
    res.send(resp);
})

app.get('/getallemployeesofcom/:id', async (req,res) => {
    const id = new mongoose.Types.ObjectId(req.params.id);
    let resp = await employeeData.getEmployeesOfCom(id);
    res.send(resp);
})

app.use('*', (req,res) => {
    res.send('404 not found!');
});

app.listen(3000, () => {
    console.log('Your server is running on http://localhost:3000');
})