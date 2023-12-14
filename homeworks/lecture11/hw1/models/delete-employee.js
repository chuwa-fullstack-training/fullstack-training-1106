const findEmployeeById = require('./find-employee');

async function deleteEmployeeById(id = '65701356057a750dcce93dae') {
    let employee = await findEmployeeById(id);
    if (!employee) {
        throw Error("Employee Not Found");
    }
    let res = await employee.deleteOne();
    console.log("Employee deleted");
    return res;
}

module.exports = deleteEmployeeById;