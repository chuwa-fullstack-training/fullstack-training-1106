const mongoose = require('./connect');
const { Company } = require('./schema');

/**
 *  Update a company by id
 */
const ID = new mongoose.Types.ObjectId('5f9b1c9b9d9b1e1b9d9b1e1b');
Company.findByIdAndUpdate(ID, { name: 'Alphabet' })
    .then((company) => {
        console.log(company);
    })
    .catch((err) => {
        console.log('Error updating company', err);
    })
    .finally(() => {
        mongoose.disconnect();
    });