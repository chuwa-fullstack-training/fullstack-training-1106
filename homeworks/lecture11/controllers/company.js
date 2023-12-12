const Company = require('../models/company');
const Employee = require('../models/employee');


// /api/posts:
const createCompany = async (req, res) => {
    try {
        const company = new Company(req.body);
        if (!company.name) {
            return res.status(400).json({ message: 'Missing required fields' });
        }
        await company.save();
        res.status(201).json({ message: 'Company created' });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const updateACompany = async (req, res) => {
    try {
        const company = await Company.findById(req.params?.id);

        company.name = req.body.name ?? company.name;
        company.description = req.body.description ?? company.description;
        company.headquarters = req.body.headquarters ?? company.headquarters;
        company.industry = req.body.industry ?? company.industry;

        await company.save();
        res.json(company);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteACompany = async (req, res) => {
    try {
        await Company.findByIdAndDelete(req.params?.id);
        res.status(204).json({ message: 'Company deleted' });
    } catch(err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const getACompany = async (req, res) => {
    try {
        const company = await Company.findById(req.params?.id);
        res.status(200).json(company);
    } catch(err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.find();
        res.json(companies);
    } catch(err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    createCompany,
    updateACompany,
    deleteACompany,
    getACompany,
    getAllCompanies
};