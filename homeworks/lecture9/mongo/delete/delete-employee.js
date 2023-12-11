const mongoose = require('mongoose');
const { Employee } = require('./mongo/schema');

Employee.findBYIdAndDelete(ID)
    .then(employee => console.log('Company Deleted', employee))
    .catch(err => console.log('Error deleting company: ', err))
    .finally(() => mongoose.connection.close());