const Company = require('../models/Company');

const createCompany = async input => {
  try {
    const company = new Company(input);
    await company.save();
    console.log('Company saved');
  } catch (err) {
    console.log(err);
  }
};

const updateCompany = async (id, input) => {
  try {
    // find the company
    const company = await Company.findById(id);

    // update the company
    company.name = input.name ?? company.name;
    company.description = input.description ?? company.description;
    company.headquarters = input.headquarters ?? company.headquarters;
    company.industry = input.industry ?? company.industry;

    // save the company
    await company.save();
    console.log('Company updated');
  } catch (err) {
    console.log('Error updating company');
  }
};

const getOneCompany = async id => {
  try {
    const company = await Company.findById(id);
    console.log(company)
  } catch (err) {
    console.log('No company found');
  }
};

const getAllCompanies = async () => {
  try {
    const companies = await Company.find();
    console.log(companies);
  } catch (err) {
    console.error(err.message);
  }
};

const deleteCompany = async id => {
  try {
    await Company.findByIdAndDelete(id);
    console.log('Company deleted');
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  createCompany,
  updateCompany,
  getOneCompany,
  getAllCompanies,
  deleteCompany
};
