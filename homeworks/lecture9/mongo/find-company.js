const mongoose = require('./connect');
const { Company } = require('./schema');

/**
 * Find a company by id
 */
const ID = new mongoose.Types.ObjectId('5f9b1c9b9d9b1e1b9d9b1e1b');
Company.findById(ID)
    .then((company) => {
        console.log(company);
    })
    .catch((err) => {
        console.log('Error finding company', err);
    })
    .finally(() => {
        mongoose.disconnect();
    });