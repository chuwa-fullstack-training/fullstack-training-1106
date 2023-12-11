const mongoose = require('mongoose');
const { Employee } = require('./mongo/schema');

Employee.findById(ID)
    .then(employee => console.log(employee))
    .catch(err => console.log(err))
    .finally(() => mongoose.disconnect());