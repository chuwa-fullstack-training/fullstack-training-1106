const mongoose = require('mongoose');
const findEmployeeById = require('./find-employee');

async function updateEmployeeById(id = '657003909e8f8de17b238d64', newObj = {}) {
    let employee = await findEmployeeById(id);
    if (!employee) {
        throw Error("Employee Not Found");
    }
    if ("company" in newObj) {
        try {
            newObj.company = new mongoose.Types.ObjectId(newObj.company);
        } catch (e) {
            throw Error("Unable to create object id");
        }
    }
    await employee.updateOne(newObj);
    console.log("Employee updated");
    employee = await findEmployeeById(id);
    return employee;
}
module.exports = updateEmployeeById;