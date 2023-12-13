const mongoose = require('mongoose');
const { Employee, Company } = require('./db/schema');

async function getAllEmployees() {
    const employees = Employee.find()
        .catch(err => console.log('Error finding all Employees', err));
    return employees;
}

async function getEmployee(id) {
    const employee = Employee.findById(id)
        .catch(err => console.log('Error finding all Employees', err));
    return employee;
}

async function createEmployee(infos) {
    const foundCompany = await Company.findById(infos.company).catch(err => console.log(`Company with id: ${infos.company} not found`));
    const employee = new Employee(infos);
    let employee_id;
    await employee.save().then(async savedEmployee => {
        employee_id = savedEmployee._id;
        foundCompany._employees.push(savedEmployee._id);
        await foundCompany.save();
        console.log('Employee created and associated with the company successfully.');
    }).catch(err => console.log('Error saving employee', err));
    return employee_id;
}

async function updateEmployee(id, update_info) {
    await Employee.findByIdAndUpdate(id, update_info).then(() => console.log('Employee Updated'))
        .catch(err => console.log('Error updating employee', err));
    return Employee.findById(id);
}

async function deleteEmployee(id) {
    await Employee.findByIdAndDelete(id).then(() => console.log('Employee deleted'))
        .catch(err => console.log('Error deleting employee', err));
    return Employee.findById(id);
}

module.exports = {
    getAllEmployees,
    getEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
}