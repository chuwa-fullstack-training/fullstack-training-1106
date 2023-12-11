const mongoose = require('mongoose');
const { Company } = require('./mongo/schema');

Company.findOne({ name: 'Google' })
    .then(company => console.log(company['_employees']))
    .catch(err => console.log('Error: ', err))
    .finally(() => mongoose.connection.close());