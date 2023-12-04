const mongoose = require('./connect');
const { Employee } = require('./schema');

/**
 * Find all employees
 */
Employee.find()
    .then((employees) => {
        console.log(employees);
    })
    .catch((err) => {
        console.log('Error finding employees', err);
    })
    .finally(() => {
        mongoose.disconnect();
    });