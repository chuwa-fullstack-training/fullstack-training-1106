const { Company } = require('../db/schema');

const getAllCompanies = async (req, res) => {
    console.log('Get all')
    const companies = await Company.find()
        .catch(err => res.status(500).json({message: 'Error finding all Companies', err}));
    res.status(200).json(companies);
}

const getCompany = async (req, res) => {
    console.log('get One');
    const company = await Company.findById(req.params?.id)
        .catch(err => res.status(500).json({message: 'Error finding Company', err}));
    res.status(200).json(company);
}

const getAllEmployeeByCompany = async (req, res) => {
    console.log(req.params);
    const company = await Company.findById(req.params?.id)
        .populate('_employees')
        .catch(err => res.status(500).json({message: 'Error finding Company', err}));
    res.status(200).json(company._employees);
}

const createCompany = async (req, res) => {
    console.log(req);
    const company = new Company(req.body);
    await company.save().then(() => {
        console.log('Company saved');
        res.status(201).json(company);
    }).catch(err => res.status(500).json({message: 'Error saving Company', err}));
}

const updateCompany = async(req, res) => {
    const company = await Company.findByIdAndUpdate(req.params?.id, req.body).then(updatedCompany => {
        console.log('Company Updated');
        res.status(200).json(updatedCompany);
    }).catch(err => res.status(500).json({message: 'Error updating Company', err}));
    
}

const deleteCompany = async (req, res) => {
    await Company.findByIdAndDelete(req.params?.id).then(() => {
        console.log('Company deleted');
        res.status(200).json({ message: 'Company deleted' });
    }).catch(err => res.status(500).json({message: 'Error deleting Company', err}));
}

module.exports = {
    getAllCompanies,
    getCompany,
    getAllEmployeeByCompany,
    createCompany,
    updateCompany,
    deleteCompany
}