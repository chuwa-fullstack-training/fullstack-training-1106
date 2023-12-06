// Create a set of APIs to manage employees and companies. The data should be stored in MongoDB. The API should support the following operations:

// - Create a new company *
// - Create a new employee *
// - Get a company by id *
// - Get an employee by id *
// - Update a company by id *
// - Update an employee by id *
// - Delete a company by id *
// - Delete an employee by id *
// - Get all companies *
// - Get all employees *
// - Get all employees of a company *

// This scrpits include the method find employees by manager

const express = require('express');
const router = express.Router();
const { Company, Employee} = require('./Schema');

// All get function that find companies and employees either by id or find all
router.get('/getAllEmployees', async (req, res) => {
    try{
        const employees = await Employee.find();
        if (employees){
            res.json(employees);
        }else{
            res.status(404).send('404 Not Found');
        }
        
    }catch (err) {
        console.log(err);
        res.status(500).send('Server Error')
    }
})

router.get('/getEmployee/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const employee = await Employee.findById(id);
        if (employee){
            res.json(employee);
        }else{
            res.status(404).send('404 Not Found');
        }
    }catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
})

router.get('/getCompanyEmployees/:id', async (req, res) => {
    try{
        const companyId = req.params.id;
        const employees = await Employee.find({company: companyId});
        if (employees){
            res.json(employees);
        }else{
            res.status(404).send('404 Not Found');
        }
    }catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
})

router.get('/getEmployeesByManager/:id', async (req, res) => {
    try{
        const managerId = req.params.id;
        const employees = await Employee.find({_manager: managerId});
        if(employees){
            res.json(employees);
        }else{
            res.status(404).send('404 Not Found');
        }
    }catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
})

router.get('/getAllCompanies', async (req, res) => {
    try{
        const companies = await Company.find();
        if(companies){
            res.json(companies);
        }else{
            res.status(404).send('404 Not Found');
        }
    }catch (err) {
        console.log(err);
        res.status(500).send('Server Error')
    }
})

router.get('/getCompany/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const company = await Company.findById(id);
        if(company){
            res.json(company);
        }else{
            res.status(404).send('404 Not Found');
        }
    }catch (err) {
        console.log(err);
        res.status(500).send('Server Error')
    }
})

// All creation functions 
router.post('/createEmployee', async (req, res) => {
    try {
        const managerId = req.body._manager;
        if (managerId) {
            const { firstName, lastName, company: companyId, _manager: managerId} = req.body;
            const employee = new Employee({ firstName, lastName, company: companyId, _manager: managerId});
            const savedEmployee = await employee.save();
            await Company.findByIdAndUpdate(companyId, {
                $push: {_employees: savedEmployee._id}
            })
        }else{
            const { firstName, lastName, company: companyId } = req.body;
            const employee = new Employee({ firstName, lastName, company: companyId});
            const savedEmployee = await employee.save();
            await Company.findByIdAndUpdate(companyId, {
                $push: {_employees: savedEmployee._id}
            })
        }
        res.send('Employee created successfully!')
    }catch (err) {
        console.log(err);
        res.status(500).send('Server Error: Failed')
    }
})

router.post('/createCompany', async (req, res) => {
    try{
        const { name } = req.body
        const company = new Company({name});
        await company.save();
        res.send('Company created successfully!')
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error: Failed')
    }
})

// Deleted functions
router.delete('/deleteCompany/:id', async (req, res) => {
    try{
        const companyId = req.params.id;
        await Company.findByIdAndDelete(companyId);
        // The employees in this company should also be deleted
        await Employee.deleteMany({company: companyId});

        res.send(`Successfully deleted company ${companyId} and according employees`)
    }catch (err) {
        console.log(err);
        res.status(500).send('Server Error: Operation Failed')
    } 
});

router.delete('/deleteEmployee/:id', async (req, res) => {
    try{
        const employeeId = req.params.id;
        await Employee.findByIdAndDelete(employeeId);
        await Employee.updateMany({_manager: employeeId}, {_manager: null});
        

        res.send(`Successfully deleted employee ${employeeId}`)
    }catch (err){
        console.log(err);
        res.status(500).send('Server Error: Operation Failed')
    }
})

// Update functions
router.put('/updateCompany/:id', async (req, res) => {
    try{
        const companyId = req.params.id;
        const updateInfo = req.body
        await Company.findByIdAndUpdate(companyId, updateInfo);

        res.send('Updated Successfully');
    }catch (err) {
        console.log(err);
        res.status(500).send('Server Error: Operation Failed')
    }
})

router.put('/updateEmployee/:id', async (req, res) => {
    try{
        const employeeId = req.params.id;
        const updateInfo = req.body
        await Employee.findByIdAndUpdate(employeeId, updateInfo);

        res.send('Updated Successfully');
    }catch (err) {
        console.log(err);
        res.status(500).send('Server Error: Operation Failed')
    }
})


module.exports = router;