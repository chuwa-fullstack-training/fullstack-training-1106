const mongoose = require('mongoose');
const { Employee } = require('./schema');

/**
 * Find Employee By ID
 */

async function findEmployeeById(id = '657003909e8f8de17b238d64') {
    const ID = new mongoose.Types.ObjectId(id);
    const employee = await Employee.findById(ID);

    return employee;
}

module.exports = findEmployeeById;