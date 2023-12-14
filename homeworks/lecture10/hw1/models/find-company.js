const mongoose = require('mongoose');
const { Company } = require('./schema');

/**
 * Find Company By ID
 */

async function findCompanyById(id = '656ff97366c94deac1f8cda6') {
    const ID = new mongoose.Types.ObjectId(id);
    const company = await Company.findById(ID);

    return company;
}

module.exports = findCompanyById;