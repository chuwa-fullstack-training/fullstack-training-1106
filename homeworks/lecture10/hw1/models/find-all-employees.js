const { Employee } = require('./schema');

async function findAllEmployees() {
    const employees = await Employee.find();
    return employees;
}

module.exports = findAllEmployees;