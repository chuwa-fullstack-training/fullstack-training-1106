const mongoose = require('./connect');
const { Company } = require('./schema');

/**
 * Delete a company by id
 */
const ID = new mongoose.Types.ObjectId('5f9b1c9b9d9b1e1b9d9b1e1b');
Company.findByIdAndDelete(ID)
    .then(res => {
        console.log('company deleted', res);
    })
    .catch((err) => {
        console.log('Error deleting company', err);
    })
    .finally(() => {
        mongoose.disconnect();
    });