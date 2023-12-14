const { Company } = require('./schema');

/**
 * Create a new company
 */

async function createCompany(defaultObj = {}) {
    let { name, description, headquarters, industry } = defaultObj;
    name = name || "Google";
    description = description || "a tech company";
    headquarters = headquarters || "San Francisco";
    industry = industry || "Information"

    const company = new Company({
        name,
        description,
        headquarters,
        industry
    });

    const res = await company.save();
    console.log('Company saved');
    return res;
}

module.exports = createCompany;
