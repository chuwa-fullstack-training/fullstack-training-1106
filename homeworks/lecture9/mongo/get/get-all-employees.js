const mongoose = require('mongoose');
const { Employee } = require('./mongo/schema');

Employee.find()
    .then(employee => console.log(employee))
    .catch(err => console.log('Error: ', err))
    .finally(() => mongoose.connection.close());