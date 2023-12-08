const { Company } = require('./schema');

async function findAllCompanies() {
    const companies = await Company.find();
    return companies;
}

module.exports = findAllCompanies;