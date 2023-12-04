const mongoose = require('./connect');
const { Employee } = require('./schema');

/**
 * Find an employee by id
 */

const ID = new mongoose.Types.ObjectId('5f9b1c9b9d9b1e1b9d9b1e1a');
Employee.findById(ID)
    .then((employee) => {
        console.log(employee);
    })
    .catch((err) => {
        console.log('Error finding employee', err);
    })
    .finally(() => {
        mongoose.disconnect();
    });