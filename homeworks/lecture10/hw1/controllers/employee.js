const createEmployee = require('../models/create-employee.js');
const findEmployeeById = require('../models/find-employee.js');
const updateEmployeeById = require('../models/update-employee.js');
const deleteEmployeeById = require('../models/delete-employee.js');
const findAllEmployees = require('../models/find-all-employees.js');
const findEmployeesByCompany = require('../models/find-employees-by-company.js');


const CreateEmployee = async (req, res) => {
    try {
        const employee = await createEmployee(req.body);
        res.status(201).json(employee);
    } catch (e) {
        res.status(500).send(e.message);
    }
};


const FindAllEmployees = async (_, res) => {
    try {
        const employees = await findAllEmployees();
        res.json(employees);
    } catch (e) {
        res.status(500).send(e.message);
    }
};


const UpdateEmployeeById = async (req, res) => {
    try {
        const id = req.params.id;
        const employee = await updateEmployeeById(id, req.body);
        res.json(employee);
    } catch (e) {
        res.status(500).send(e.message);
    }
};

const FindEmployeesByCompany = async (req, res) => {
    try {
        const id = req.params.id;
        const employees = await findEmployeesByCompany(id);
        res.json(employees);
    } catch (e) {
        res.status(500).send(e.message);
    }
};

const FindEmployeeById = async (req, res) => {
    try {
        const id = req.params.id;
        const employee = await findEmployeeById(id);
        res.json(employee);
    } catch (e) {
        res.status(500).send(e.message);
    }
};

const DeleteEmployeeById = async (req, res) => {
    try {
        const id = req.params.id;
        await deleteEmployeeById(id);
        res.status(204).json({ message: 'Employee deleted' });
    } catch (e) {
        res.status(500).send(e.message);
    }
};


module.exports = {
    CreateEmployee,
    FindAllEmployees,
    UpdateEmployeeById,
    FindEmployeesByCompany,
    FindEmployeeById,
    DeleteEmployeeById
}