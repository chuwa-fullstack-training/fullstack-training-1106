const Employee = require('../models/employee');

const createEmployee = async (req, res) => {
    try {
        const employee = new Employee(req.body);
        if (!employee.firstName || !employee.lastName || !employee.jobTitle) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
        await employee.save();
        res.status(201).json(employee);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const updateAnEmployee = async (req, res) => {
    try {
        await Employee.findByIdAndUpdate(req.params?.id, req.body);
        res.status(200).json(employee);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteAnEmployee = async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params?.id);
        res.status(200).json({ message: 'Employee deleted' });
    } catch(err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const getAnEmployee = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params?.id);
        res.status(200).json(employee);
    } catch(err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const partial_getAnEmployee = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params?.id);
        res.status(200).json(employee.firstName + ' ' + employee.lastName);
    } catch(err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch(err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const partial_getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees.firstName + ' ' + employees.lastName);
    } catch(err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getAllEmployeesByCompany = async (req, res) => {
    try {
        const employees = await Employee.find({ company: req.params?.id });
        res.status(200).json(employees);
    } catch(err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    createEmployee,
    updateAnEmployee,
    deleteAnEmployee,
    getAnEmployee,
    partial_getAnEmployee,
    getAllEmployees,
    partial_getAllEmployees,
    getAllEmployeesByCompany
};