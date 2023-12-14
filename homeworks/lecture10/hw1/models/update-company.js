const mongoose = require('mongoose');
const findCompanyById = require('./find-company');

async function updateCompanyById(id = '656ff97366c94deac1f8cda6', newObj = {}) {
    let company = await findCompanyById(id);
    if (!company) {
        throw Error("Company Not Found");
    }
    if ("_employees" in newObj && newObj["_employees"] instanceof Array) {
        try {
            newObj["_employees"] = newObj["_employees"].map((v) => new mongoose.Types.ObjectId(v));
        } catch (e) {
            throw Error("Unable to create object id");
        }
    }
    let res = await company.updateOne(newObj);
    console.log("Company updated");
    console.log(res);
    company = await findCompanyById(id);
    return company;
}

module.exports = updateCompanyById;