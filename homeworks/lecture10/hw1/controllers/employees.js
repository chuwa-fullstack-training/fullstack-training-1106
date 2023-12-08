const data = require('../data');
const mongoose = require('mongoose');
const employeeData = data.employee;

const createemployee = async (req,res) => {
    const {firstName,
        lastName,
        company,
        startDate,
        jobTitle,
        resigned,
        salary,
        _manager} = req.body;
    let resp = await employeeData.createEmployee(firstName,lastName,company,startDate,jobTitle,resigned,salary,_manager);
    res.send(resp);
};

const getemployee = async (req,res) => {
    const id = new mongoose.Types.ObjectId(req.params.id);
    let resp = await employeeData.getEmployeeById(id);
    res.send(resp);
};

const updateemployee = async (req,res) => {
    const id = new mongoose.Types.ObjectId(req.params.id);
    let resp = await employeeData.updateEmployeeById(id,req.body);
    res.send(resp);
};

const deleteemployee = async (req,res) => {
    const id = req.params.id;
    let resp = await employeeData.deleteEmployeeById(id);
    res.send(resp);
}

const getallemployees = async (req,res) => {
    let resp = await employeeData.getAllEmployees();
    res.send(resp);
};

const getallemployeesofcom = async (req,res) => {
    const id = new mongoose.Types.ObjectId(req.params.id);
    let resp = await employeeData.getEmployeesOfCom(id);
    res.send(resp);
};

module.exports = {
    createemployee,
    getemployee,
    updateemployee,
    deleteemployee,
    getallemployees,
    getallemployeesofcom
}