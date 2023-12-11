const mongoose = require('mongoose');
const { Company } = require('./mongo/schema');

Company.find()
    .then(company => console.log(company))
    .catch(err => console.log('Error: ', err))
    .finally(() => mongoose.connection.close());