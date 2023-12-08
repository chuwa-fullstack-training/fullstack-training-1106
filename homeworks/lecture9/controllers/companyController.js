const Company = require('../schemas/Company');

// Create a new company
const createCompany = async (req, res) => {
    try {
        const newCompany = new Company(req.body);
        await newCompany.save();
        res.status(201).json({ message: 'Company created' });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get a company by id
const getCompanyById = async (req, res) => {
    try {
        const company = await Company.findById(req.params?.id);
        if (!company) return res.status(404).json({ message: 'Company not found' });
        res.status(200).json(company);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Update a company by id
const updateCompanyById = async (req, res) => {
    try {
        const updatedCompany = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCompany) return res.status(404).json({ message: 'Company not found' });
        res.json(updatedCompany);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Delete a company by id
const deleteCompanyById = async (req, res) => {
    try {
        const deletedCompany = await Company.findByIdAndDelete(req.params?.id);
        if (!deletedCompany) return res.status(404).json({ message: 'Company not found' });
        res.status(204).json({ message: 'Company deleted' });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get all companies
const getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.find();
        res.status(200).json(companies);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get all employees of a company
const getAllEmployeesOfCompany = async (req, res) => {
    try {
        const company = await Company.findById(req.params.id).populate('employees');
        if (!company) return res.status(404).json({ message: 'Company not found' });
        res.status(200).json(company.employees);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    createCompany,
    getCompanyById,
    updateCompanyById,
    deleteCompanyById,
    getAllCompanies,
    getAllEmployeesOfCompany
};