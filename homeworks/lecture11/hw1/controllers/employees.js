const { json } = require('express');
const data = require('../data');
const mongoose = require('mongoose');
const { Employee } = require('../data/schema');
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
    if(req.auth) res.send(resp);
    else{
        let {firstName, lastName} = resp;
        res.json({firstName:firstName, lastName:lastName});
    }
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
    if(req.auth) res.send(resp);
    else{
        let result = resp.map(e => {return {'firstName':e.firstName,'lastName':e.lastName}});
        res.send(result);
    }
};

const getallemployeesofcom = async (req,res) => {
    const id = new mongoose.Types.ObjectId(req.params.id);
    let user = req.user;
    const userId = new mongoose.Types.ObjectId(user.id);

    let userInfo = await employeeData.getEmployeeById(userId);
    
    
    if(userInfo.company.equals(id)){
        let resp = await employeeData.getEmployeesOfCom(id);
        res.send(resp);
    }else{
        res.status(401).json({msg:'Unauthorized user!'});
    }
    
};

module.exports = {
    createemployee,
    getemployee,
    updateemployee,
    deleteemployee,
    getallemployees,
    getallemployeesofcom
}