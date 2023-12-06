const mongoose = require('./connect');
const { Employee } = require('./schema');

/**
 * Update an employee by id
 */
const ID = new mongoose.Types.ObjectId('5f9b1c9b9d9b1e1b9d9b1e1a');
Employee.findByIdAndUpdate(ID, { name: 'Sundar Pichai' })
    .then((employee) => {
        console.log(employee);
    })
    .catch((err) => {
        console.log('Error updating employee', err);
    })
    .finally(() => {
        mongoose.disconnect();
    });