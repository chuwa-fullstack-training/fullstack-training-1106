const mongoose = require('mongoose');
const { Company } = require('./mongo/schema');

Company.findById(ID)
    .then(company => console.log(company))
    .catch(err => console.log(err))
    .finally(() => mongoose.disconnect());