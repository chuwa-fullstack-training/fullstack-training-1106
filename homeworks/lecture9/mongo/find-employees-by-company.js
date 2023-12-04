const mongoose = require('./connect');
const { Employee, Company } = require('./schema');

/**
 * Find all employees by the given company id
 */

const ID = new mongoose.Types.ObjectId('5f9b1c9b9d9b1e1b9d9b1e1b');
Company.find({ companyId: ID })
    .then((employees) => {
        console.log(employees);
    })
    .catch((err) => {
        console.log('Error finding employees', err);
    })
    .finally(() => {
        mongoose.disconnect();
    });
