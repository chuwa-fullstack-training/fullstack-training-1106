const Employee = require('../models/employee');

const createEmployee = async (req, res) => {
    try {
        const employee = new Employee(req.body);
        await employee.save();
        res.status(201).json({ message: 'Employee created' });
        res.status(200).json(user);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const updateAnEmployee = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params?.id);

        employee.firstName = req.body.firstName ?? employee.firstName;
        employee.lastName = req.body.lastName ?? employee.lastName;
        employee.jobTitle = req.body.jobTitle ?? employee.jobTitle;

        await employee.save();
        res.json(user);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteAnEmployee = async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params?.id);
        res.status(204).json({ message: 'Employee deleted' });
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

const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch(err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getAllEmployeesByCompany = async (req, res) => {
    try {
        const employees = await Employee.find({ company: req.params?.id });
        res.json(employees);
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
    getAllEmployees,
    getAllEmployeesByCompany
};