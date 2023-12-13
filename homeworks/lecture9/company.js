const mongoose = require('mongoose');
const { Company } = require('./db/schema');

async function getAllCompanies() {
    const companies = Company.find()
        .catch(err => console.log('Error finding all Companies', err));
    return companies;
}

async function getCompany(id) {
    const company = Company.findById(id)
        .catch(err => console.log('Error finding Company', err));
    return company;
}

async function getAllEmployeeByCompany(id) {
    const employees = Company.findById(id)
        .populate('_employees')
        .catch(err => console.log('Error finding Company', err));
    return employees;
}

async function createCompany(infos) {
    const company = new Company(infos);
    await company.save().then(() => console.log('Company saved'))
        .catch(err => console.log('Error saving Company', err));
    return Company.findOne({ name: infos.name });
}

async function updateCompany(id, update_info) {
    await Company.findByIdAndUpdate(id, update_info).then(() => console.log('Company Updated'))
        .catch(err => console.log('Error updating Company', err));
    return Company.findById(id);
}

async function deleteCompany(id) {
    await Company.findByIdAndDelete(id).then(() => console.log('Company deleted'))
        .catch(err => console.log('Error deleting Company', err));
    return Company.findById(id);
}

module.exports = {
    getAllCompanies,
    getCompany,
    getAllEmployeeByCompany,
    createCompany,
    updateCompany,
    deleteCompany
}