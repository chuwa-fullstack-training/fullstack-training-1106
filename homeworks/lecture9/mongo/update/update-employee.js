const mongoose = require('mongoose');
const { Employee } = require('./mongo/schema');

Employee.findByIdAndUpdate(ID, {
    firstName: 'ichilou',
    secondName: 'Matsumoto',
    jobTitle: 'CEO'
})
    .then(console.log('Employee updated'))
    .catch(err => console.log(err))
    .finally(() => mongoose.disconnect());