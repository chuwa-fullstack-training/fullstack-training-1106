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

// This scripts include the method find employees by manager
const Company = require('../models/Company');
const Employee = require('../models/Employee');

// All get function that find companies and employees either by id or find all
const getAllEmployees = async (req, res) => {
    try{
        const employees = await Employee.find();
        res.json(employees);
        
    }catch (err) {
        console.error(err.message);
        res.status(500).json({message: 'Server Error'});
    }
}

const getOneEmployee = async (req, res) => {
    try{
        const id = req.params.id;
        const employee = await Employee.findById(id);
        if (employee){
            res.json(employee);
        }else{
            res.status(404).json({message: 'Employee Not Found'});
        }
    }catch (err) {
        console.error(err.message);
        res.status(500).json({message: 'Server Error'});
    }
}

const getEmployeeByCompany = async (req, res) => {
    try{
        const companyId = req.params.id;
        const employees = await Employee.find({company: companyId});
        res.json(employees);
        
    }catch (err) {
        console.error(err.message);
        res.status(500).json({message: 'Server Error'});
    }
}

const getEmployeesByManager = async (req, res) => {
    try{
        const managerId = req.params.id;
        const employees = await Employee.find({_manager: managerId});
        res.json(employees);

    }catch (err) {
        console.error(err.message);
        res.status(500).json({message: 'Server Error'});
    }
}
 
const getAllCompanies = async (req, res) => {
    try{
        const companies = await Company.find();
        res.json(companies);
    }catch (err) {
        console.error(err.message);
        res.status(500).json({message: 'Server Error'});
    }
}

const getOneCompany = async (req, res) => {
    try{
        const id = req.params.id;
        const company = await Company.findById(id);
        if(company){
            res.json(company);
        }else{
            res.status(404).json({message: 'Company Not Found'});
        }
    }catch (err) {
        console.error(err.message);
        res.status(500).json({message: 'Server Error'});
    }
}

const createEmployee = async (req, res) => {
    try {
        const requestBody = {...req.body};
        const employee = new Employee(requestBody);
        const savedEmployee = await employee.save();
        await Company.findByIdAndUpdate(requestBody.company, {
            $push: {_employees: savedEmployee._id}
        })

        res.json({message: 'Company created successfully!'})
    }catch (err) {
        console.error(err.message);
        res.status(500).json({message: 'Server Error'});
    }
}

const createCompany = async (req, res) => {
    try{
        const requestBody = {...req.body};
        const company = new Company(requestBody);
        await company.save();
        res.json({message: 'Company created successfully!'})
    } catch (err) {
        console.error(err.message);
        res.status(500).json({message: 'Server Error'});
    }
}

// Deleted functions

const deleteCompany = async (req, res) => {
    try{
        const companyId = req.params.id;
        const company = await Company.findByIdAndDelete(companyId);
        // The employees in this company should also be deleted
        if (company){
            await Employee.deleteMany({company: companyId});
            res.json({message: `Successfully deleted company ${companyId} and according employees`})
        }else{
            res.status(404).json({message: 'Company Not Found'});
        }
        
    }catch (err) {
        console.error(err.message);
        res.status(500).json({message: 'Server Error'});
    } 
}


const deleteEmployee = async (req, res) => {
    try{
        const employeeId = req.params.id;
        const employee = await Employee.findById(employeeId);
        if (employee){
            // deleted this employee from the company employee list
            const companyId = employee.company;
            await Company.findByIdAndUpdate(companyId, {
                $pull: {_employees: employeeId}
            })
            await Employee.findByIdAndDelete(employeeId);
            // check if there are employees under this manager
            await Employee.updateMany({_manager: employeeId}, {_manager: null});
            res.json({message: `Successfully deleted employee ${employeeId}`})
        }
        else{
            res.status(404).json({message: 'Employee Not Found'});
        }
    }catch (err){
        console.error(err.message);
        res.status(500).json({message: 'Server Error'});
    }
}

// Update functions
const updateCompany = async (req, res) => {
    try{
        const companyId = req.params.id;
        const updateInfo = req.body
        const company = await Company.findByIdAndUpdate(companyId, updateInfo);
        if (company){
            res.json({message: 'Updated Successfully'});
        }else{
            res.status(404).json({message: 'Company Not Found'});
        }
        
    }catch (err) {
        console.error(err.message);
        res.status(500).json({message: 'Server Error'});
    }
}

const updateEmployee = async (req, res) => {
    try{
        const employeeId = req.params.id;
        const updateInfo = req.body
        const employee = await Employee.findByIdAndUpdate(employeeId, updateInfo);
        if (employee){
            res.json({message: 'Updated Successfully'});
        }else{
            res.status(404).json({message: 'Employee Not Found'});
        }
        
    }catch (err) {
        console.error(err.message);
        res.status(500).json({message: 'Server Error'});
    }
}


module.exports = {
    getAllCompanies,
    getAllEmployees,
    getOneCompany,
    getOneEmployee,
    getEmployeeByCompany,
    getEmployeesByManager,
    createCompany,
    createEmployee,
    deleteCompany,
    deleteEmployee,
    updateCompany,
    updateEmployee
};