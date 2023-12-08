const mongoose = require('mongoose');
const { Employee } = require('./schema');

async function findEmployeesByCompany(id) {
    let ID;
    try {
        ID = new mongoose.Types.ObjectId(id);
    } catch (e) {
        throw Error("Unable to create object id");
    }
    let employees = await Employee.find({ company: ID });
    return employees;
}

module.exports = findEmployeesByCompany;