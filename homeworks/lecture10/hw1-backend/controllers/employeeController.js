const Employees = require('../models/employee');
async function createEmployee(req, res) {
    console.log(req.body);
    try {
        const newEmployee = new Employees(req.body);
        const savedEmployee = await newEmployee.save();
        res.status(201).json(savedEmployee);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}
async function getEmployeeById(req, res) {
    try {
        const employee = await Employees.findById(req.params.id);
        res.json(employee);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}
async function updateEmployeeById(req, res) {
    try{
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedEmployee);
    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
}
async function deleteEmployeeById(req, res) {
    try {
        const employee = await Employees.findByIdAndDelete(req.params.id);
        if(!employee){
            res.status(404).json({ message: "Employee not found!" });
            return;
        }
        res.json(employee);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}
async function getAllEmployees(req, res) {
    try{
        const employees = await Employees.find();
        res.json(employees);
    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
}

async function getAllSubordinates(req, res) {
    // for manager, return all subordinates
    try{
        const manager = await Company.findById(req.params.id).populate('subordinates');
        res.json(manager.subordinates);
    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    createEmployee,
    getEmployeeById,
    updateEmployeeById,
    deleteEmployeeById,
    getAllEmployees,
    getAllSubordinates,
};