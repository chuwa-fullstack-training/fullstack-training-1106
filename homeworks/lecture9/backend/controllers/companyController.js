const Company = require('../models/company');
async function createCompany(req, res) {
    console.log(req.body);
    try {
        const newCompany = new Company(req.body);
        const savedCompany = await newCompany.save();
        res.status(201).json(savedCompany);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}
async function getCompanyById(req, res) {
    try {
        const company = await Company.findById(req.params.id);
        res.json(company);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}
async function updateCompanyById(req, res) {
    try {
        const company = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(!company){
            res.status(404).json({ message: "Company not found!" });
            return;
        }
        res.json(company);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}
async function deleteCompanyById(req, res) {
    try {
        const company = await Company.findByIdAndDelete(req.params.id);
        if(!company){
            res.status(404).json({ message: "Company not found!" });
            return;
        }
        res.json(company);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}
async function getAllCompanies(req, res) {
    try{
        const companies = await Company.find();
        res.json(companies);
    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
}
async function getAllEmployeesOfaCompany(req, res) {
    try{
        const company = await Company.findById(req.params.id).populate('employees');
        res.json(company.employees);
    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
}




module.exports = {
    createCompany,
    getCompanyById,
    updateCompanyById,
    deleteCompanyById,
    getAllCompanies,
    getAllEmployeesOfaCompany
};