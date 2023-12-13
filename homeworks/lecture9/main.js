const http = require('http');
const Url = require("url");
const mongoose = require("mongoose");
require('dotenv').config()

const connectDB = require("./db/connectDB.js");
const Employee = require("./employee.js");
const Company = require("./company.js");

const PORT = 3000;

connectDB();

// I'm gonna pass in the param 'id' in this way: 
// `http://localhost:3000/employees?id=1548756`
// `http://localhost:3000/employees?company_id=1548756`
// `http://localhost:3000/companies?company_id=1548756`
const server = http.createServer(async (req, res) => {
    const {method} = req;
    const { pathname, query } = Url.parse(req.url, true);
    const { id, company_id, ...infos } = query;

    // const id = new mongoose.Types.ObjectId(id);
    // const company_id = new mongoose.Types.ObjectId(inputCompanyId);

    switch (method) {
        case 'GET':
            if (pathname === '/employees') {
                if (!id) {
                    const employeeDatas = await Employee.getAllEmployees();
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(employeeDatas));
                }
                else if (company_id) {
                    const employeeDatas = await Company.getAllEmployeeByCompany(company_id);
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(employeeDatas._employees));
                }
                else {
                    const employeeData = await Employee.getEmployee(id);
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(employeeData));
                }
            }
            else if (pathname === '/companies') {
                if (!company_id) {
                    const companyDatas = await Company.getAllCompanies();
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(companyDatas));
                }
                else {
                    const companyData = await Company.getCompany(company_id);
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(companyData));
                }
            }
            else {
                res.statusCode = 404;
                res.end('Error URL passed in.');
            }
            break;
        case 'POST':
            if (pathname === '/employees') {
                const newEmployee = await Employee.createEmployee(infos)
                res.end(`Employee created successfully, id is: ${newEmployee._id}`);
            }
            else if (pathname === '/companies') {
                const newCompany = await Company.createCompany(infos);
                res.end(`Company created successfully, id is: ${newCompany._id}`);
            }
            else {
                res.statusCode = 404;
                res.end('Error URL passed in.');
            }
            break;
        case 'PUT':
            if (pathname === '/employees') {
                const newEmployee = await Employee.updateEmployee(id, infos);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(newEmployee));
            }
            else if (pathname === '/companies') {
                const newCompany = await Company.updateCompany( company_id, infos );
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(newCompany));
            }
            else {
                res.statusCode = 404;
                res.end('Error URL passed in.');
            }
            break;
        case 'DELETE':
            if (pathname === '/employees') {
                const deletedEmployee = await Employee.deleteEmployee(id);
                res.end(`Delete finished`);
            }
            else if (pathname === '/companies') {
                const deletedConpany = await Company.deleteCompany(company_id);
                res.end(`Delete finished`);
            }
            else {
                res.statusCode = 404;
                res.end('Error URL passed in.');
            }
            break;
        default:
            res.statusCode = 404;
            res.end("Request method can not be implemented.");
    }
})

server.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});