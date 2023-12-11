const mongoose = require('mongoose');
const { Company } = require('./mongo/schema');

Company.findBYIdAndDelete(ID)
    .then(company => console.log('Company Deleted', company))
    .catch(err => console.log('Error deleting company: ', err))
    .finally(() => mongoose.connection.close());