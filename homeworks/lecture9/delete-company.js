const findCompanyById = require('./find-company');

async function deleteCompanyById(id = '656ff97366c94deac1f8cda6') {
    let company = await findCompanyById(id);
    if (!company) {
        throw Error("Company Not Found");
    }
    let res = await company.deleteOne();
    console.log("Company deleted");
    return res;
}

module.exports = deleteCompanyById;