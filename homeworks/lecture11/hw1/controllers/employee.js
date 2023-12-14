const createEmployee = require('../models/create-employee.js');
const findEmployeeById = require('../models/find-employee.js');
const updateEmployeeById = require('../models/update-employee.js');
const deleteEmployeeById = require('../models/delete-employee.js');
const findAllEmployees = require('../models/find-all-employees.js');
const findEmployeesByCompany = require('../models/find-employees-by-company.js');
const CustomAPIError = require('../errors');

const CreateEmployee = async (req, res) => {
    try {
        const employee = await createEmployee(req.body);
        res.status(201).json(employee);
    } catch (e) {
        res.status(500).send(e.message);
    }
};


const FindAllEmployees = async (req, res) => {
    try {
        let employees = await findAllEmployees();
        if (req.user) {
            res.json(employees);
        } else {
            employees = employees.map((v) => {
                return { firstName: v.firstName, lastName: v.lastName };
            });
            res.json(employees);
        }
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

const FindEmployeesByCompany = async (req, res, next) => {
    try {
        if (!req.user) {
            console.log("Not login");
            next(new CustomAPIError("Access Denied!", 400));
            return;
        }
        const id = req.params.id;
        const employees = await findEmployeesByCompany(id);
        const uid = req.user.id;
        let employee = await findEmployeeById(uid);
        employee = await employee.populate('company');
        console.log(employee);
        if (employee.company && employee.company.id == id) {
            console.log("Same company");
            res.json(employees);
        } else {
            console.log("Different Company or there is no company");
            next(new CustomAPIError("Access Denied!", 400));
            return;
        }
    } catch (e) {
        res.status(500).send(e.message);
    }
};

const FindEmployeeById = async (req, res, next) => {
    try {
        if (!req.user) {
            console.log("Not login. Access Denied");
            next(new CustomAPIError("Access Denied!", 400));
            return;
        }
        const id = req.params.id;
        let employee = await findEmployeeById(id);
        if (!employee) {
            console.log("No such employee");
            next(new CustomAPIError("Access Denied!", 400));
            return;
        }

        if (req.user.id === employee.id) {
            console.log("Self-lookup");
            res.json(employee);
            return;
        }
        const otherId = req.user.id;
        const otherEmployee = await findEmployeeById(otherId);

        if (employee.company && otherEmployee.company && employee.company.equals(otherEmployee.company)) {
            console.log("Same Company lookup");
            res.json(employee);
            return;
        }
        console.log("Not the same company, Deny");
        next(new CustomAPIError("Access Denied!", 400));
        return;

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