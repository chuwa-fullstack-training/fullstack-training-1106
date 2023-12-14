
const Company = require('../models/company');
const Employee = require('../models/employee');
// Create
const createCompany = async (req, res) => {
    try {
        const company = await Company.create(req.body);
        res.status(201).json(company);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get by id
const getCompanyById = async (req, res) => {
    try {
        const company = await Company.findById(req.params.companyId);
        if (!company) {
          return res.status(404).json({ message: 'Company not found' });
        }
        res.json(company);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update by id
const updateCompanyById = async (req, res) => {
    try {
        const company = await Company.findByIdAndUpdate(req.params.companyId, req.body, { new: true });
        if (!company) {
          return res.status(404).json({ message: 'Company not found' });
        }
        res.json(company);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete by id
const deleteCompanyById = async (req, res) => {
    try {
        const company = await Company.findByIdAndDelete(req.params.companyId);
        if (!company) {
          return res.status(404).json({ message: 'Company not found' });
        }
        res.json({ message: 'Company deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all companies name
const getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.find();
        res.json(companies);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all employees of a company
const getAllEmployeesOfCompany = async (req, res) => {
    try {
        const company = await Company.findById(req.params.companyId);
        if (!company) {
          return res.status(404).json({ message: 'Company not found' });
        }
        const employees = await Employee.find({ company: req.params.companyId });
        res.json(employees);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {createCompany,getCompanyById,updateCompanyById,deleteCompanyById,getAllCompanies,getAllEmployeesOfCompany};