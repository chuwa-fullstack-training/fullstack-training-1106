const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./connect.js');
const Company = require('./schema.js').Company;
const Employee = require('./schema.js').Employee;
const bodyParser = require('body-parser')

const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use(express.json());

connectDB();

app.post('/api/companies', async (req, res) => {
    try{
        const {name, description, headquarters, employees} = req.body;
        if(!name || !description || !headquarters){
            req.status(400).json({
                status: 'error',
                message: 'Missing required fields: name, description, or headquarters',
            });
            return;
        }
        const company = new Company( {name, description, headquarters, employees} );
        await company.save();
        res.status(201).json({
            message: "Success in creating the company",
            companyName: name,
            companyId: company._id
        });
        
        return;
    }catch(err){
        res.status(500).send("Error in creating new company");
        return;
    }
});

app.post('/api/employees', async (req, res) => {
    try{
        const { firstName,lastName,company,startDate,jobTitle,resigned,salary} = req.body;
        if(!firstName || !lastName){
            req.status(400).json({
                status: 'error',
                message: 'Missing required fields',
            });
            return;
        }
        const employee = new Employee( { firstName,lastName,company,startDate,jobTitle,resigned,salary});
        await employee.save();
        res.status(201).json({
            message: "Success in creating the employee",
            Name: firstName + ' ' + lastName,
            employeeId: employee._id
        });
        return;
    }catch(err){
        res.status(500).send("Error in creating new employee");
        return;
    }
});
app.get('/api/companies/:id', async (req, res) => {
    const queryId = req.params.id;
    try{
        const queryCompany = await Company.findById(queryId);
        if(queryCompany){
            res.status(200).json(queryCompany);
        }else{
            res.status(404).send("Company Not Found");
        }
    }catch(err){
        console.log(`Error in geting company ${queryId}: `, err);
        res.status(500).send("Internal Server Error");
    }
})

app.get('/api/employees/:id', async (req, res) => {
    const queryId = req.params.id;
    try{
        const queryEmployee= await Employee.findById(queryId);
        if(queryEmployee){
            res.status(200).json(queryEmployee);
        }else{
            res.status(404).send("Employee Not Found");
        }
    }catch(err){
        console.log(`Error in geting employee ${queryId}: `, err);
        res.status(500).send("Internal Server Error");
    }
})
app.get('/api/companies', async (req,res) =>{
    try{
        const queryCompanies = await Company.find();
        if(queryCompanies){
            res.status(200).json(queryCompanies);
        }else{
            res.status(404).send("Company Not Found");
        }
    }catch(err){
        console.log(`Error in geting all companies`, err);
        res.status(500).send("Internal Server Error");
    }
});

app.get('/api/employees', async (req,res) =>{
    try{
        const queryEmployees = await Employee.find();
        if(queryEmployees){
            res.status(200).json(queryEmployees);
        }else{
            res.status(404).send("Employee Not Found");
        }
    }catch(err){
        console.log(`Error in geting all employees`, err);
        res.status(500).send("Internal Server Error");
    }
});
app.delete('/api/companies/:id', async (req,res) => {
    try{
        const queryId = req.params.id;
        const result = await Company.deleteOne({_id: queryId});
        if(result.deletedCount > 0){
            res.status(200).send(`Company ${queryId} deleted successfully`);
        }else{
            res.status(404).send(`Company with Id ${queryId} not found or delete operation failed.`);
        }
    }catch(err){
        console.log(`Error in deleting company with Id ${queryId}`, err);
        res.status(500).send("Internal Server Error");
    }
});

app.delete('/api/employees/:id', async (req,res) => {
    try{
        const queryId = req.params.id;
        const result = await Employee.deleteOne({_id: queryId});
        if(result.deletedCount > 0){
            res.status(200).send(`Employee ${queryId} deleted successfully`);
        }else{
            res.status(404).send(`Employee with Id ${queryId} not found or delete operation failed.`);
        }
    }catch(err){
        console.log(`Error in deleting Employee with Id ${queryId}`, err);
        res.status(500).send("Internal Server Error");
    }
});

//update company by id
app.put('/api/companies/:id', async(req, res) =>{
    const queryId = req.params.id;
    const {name, description, headquarters, employees}  =req.body;

    let updateFields = {};

    if (name !== undefined) {
        updateFields.name = name;
    }

    if (description !== undefined) {
        updateFields.description = description;
    }

    if (headquarters !== undefined) {
        updateFields.headquarters = headquarters;
    }

    if (employees !== undefined) {
        updateFields.employees = employees;
    }
    
    try{
        const updatedCompany = await Company.findByIdAndUpdate(queryId, updateFields, {
            new: true,
            runValidators: true
        });
        if(!updatedCompany){
            res.status(404).send(`Company with Id ${queryId} Not found`);
            return;
        }
        res.status(200).json({ company: updatedCompany });

    } catch (error) {
        console.error(`Error updating company ${queryId}:`, error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

//update employee by id
app.put('/api/employees/:id', async (req, res) => {
    const employeeId = req.params.id;
    const { firstName, lastName, company, startDate, jobTitle, resigned, salary, manager } = req.body;

    let updateFields = {};

    if (firstName !== undefined) {
        updateFields.firstName = firstName;
    }

    if (lastName !== undefined) {
        updateFields.lastName = lastName;
    }

    if (company !== undefined) {
        updateFields.company = company;
    }

    if (startDate !== undefined) {
        updateFields.startDate = startDate;
    }

    if (jobTitle !== undefined) {
        updateFields.jobTitle = jobTitle;
    }

    if (resigned !== undefined) {
        updateFields.resigned = resigned;
    }

    if (salary !== undefined) {
        updateFields.salary = salary;
    }

    if (manager !== undefined) {
        updateFields.manager = manager;
    }

    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(employeeId, updateFields, {
            new: true,
            runValidators: true
        });

        if (!updatedEmployee) {
            res.status(404).send(`Employee with Id ${employeeId} Not found`);
            return;
        }

        res.status(200).json({ employee: updatedEmployee });
    } catch (error) {
        console.error(`Error updating employee ${employeeId}:`, error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


//get all employees of a company
app.get('/api/companies/:companyId/employees',async(req, res) =>{
    const companyId = req.params.companyId;
    try{
        const queryCompany = await Company.findById(companyId);
        if(!queryCompany){
            return res.status(404).send(`Company with Id ${companyId} Not Found`);
        }
        const employeesArr = await Employee.find({ _id: { $in: queryCompany.employees } });
        res.status(200).json({ employeesArr});
    }catch(err){
        console.error(`Error fetching employees for company ${companyId}:`, err);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(3000, () => {
    console.log("The server is running on port 3000");
    console.log("http://localhost:3000");
})

const databaseOperation = async ()=>{

    const company1 = new Company({
        name: 'Chuwa',
        description: 'IT consulting',
        headquarters: 'Chu Wa',
        employees: []
    });
    const company2 = new Company({
        name: 'Apple',
        description: 'mobile manufacture',
        headquarters: 'Steven Jobs',
        employees: []
    });
    
    const employee1 = new Employee({
        firstName: 'Donna',
        lastName: 'Zhou',
        company: company1,
        startDate: new Date(),
        jobTitle: 'SWE',
        resigned: false,
        salary: 5000,
    });
    const employee2 = new Employee({
        firstName: 'Qingyu',
        lastName: 'Zhou',
        company: company2,
        startDate: new Date(),
        jobTitle: 'SWE',
        resigned: false,
        salary: 1000,
    });
    const employee3 = new Employee({
        firstName: 'Jack',
        lastName: 'Zhang',
        company: company2,
        startDate: new Date(),
        jobTitle: 'SWE',
        resigned: false,
        salary: 1000,
    });

//Create a new company  
    await company1.save();
    await company2.save();
//Create a new employee
    await employee1.save();
    await employee2.save();
    await employee3.save();

    //add employees to the companies
    await Company.updateOne({_id: company1._id}, { $push: { employees: employee1._id}});
    await Company.updateOne({_id: company2._id}, { $push: { employees: employee2._id}});
    
    //get employee by id
    await Employee.findById(employee1._id)
    .then(employee => {
        console.log(`Get employee by id ${employee1._id.toString()} is: ${employee}`);
    })
    .catch(err =>{
        console.error("Error in geting employee by id");
    })

    //get company by id
    await Company.findById(company1._id)
    .then(company => {
        console.log(`Get company by id ${company1._id.toString()} is: ${company}`);
    })
    .catch(err =>{
        console.error("Error in geting company by id");
    })

    //update companies by id
    await Company.updateOne({_id: company2._id}, { $set: { headquarters: 'Tim Cook'}});

    //update employees by id
    await Employee.updateOne({_id: employee2._id}, { $set: { salary: '4000', resigned: true}});
    
    //delete company by id 
    await Company.deleteOne({_id: company1._id});
    //delete employee by id 
    await Employee.deleteOne({_id: employee1._id});

    //get all companies
    await Company.find()
    .then(companies => {
        console.log("companies: ",companies);
    })
    .catch(err => {
        console.error("Error in finding all companies")
    })

    //get all employees
    await Employee.find()
    .then(employees =>{
        console.log("All employees: ",employees)
    })
    .catch(err =>{
        console.error("error happens in find employees")
    })

    //Get all employees of a company
    const employees_of_company2 = await Employee.find({company: company2});
    console.log('all employees_of_company2: ',employees_of_company2);
}

//clean database by deleting all documents
const deleteAllDocuments = async()=>{
    try{
        await Company.deleteMany({});
        await Employee.deleteMany({});
        console.log("All documents are deleted");
    }catch(e){
        console.error("Error happnes in deleteAllDocuments");
    }
}

//run the code
const run = async() =>{
    await databaseOperation();

    await deleteAllDocuments();
}
// run();
