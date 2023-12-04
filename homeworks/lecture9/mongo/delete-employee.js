const mongoose = require('./connect');
const { Employee } = require('./schema');

/**
 * Delete an employee by id
 */
const ID = new mongoose.Types.ObjectId('5f9b1c9b9d9b1e1b9d9b1e1a');
Employee.findByIdAndDelete(ID)
    .then(res => {
        console.log('employee deleted', res);
    })
    .catch((err) => {
        console.log('Error deleting employee', err);
    })
    .finally(() => {
        mongoose.disconnect();
    });