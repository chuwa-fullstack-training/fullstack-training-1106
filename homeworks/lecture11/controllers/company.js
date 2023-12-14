const { Company, Employee } = require('../db/schema');

const getAllCompanies = async (req, res) => {
    const companies = await Company.find()
        .catch(err => res.status(500).json({message: 'Error finding all Companies', err}));
    res.status(200).json(companies);
}

const getCompany = async (req, res) => {
    const company = await Company.findById(req.params?.id)
        .catch(err => res.status(500).json({message: 'Error finding Company', err}));
    res.status(200).json(company);
}

const getAllEmployeeByCompany = async (req, res) => {
    if (!req.user) {
        res.status(401).json({ message: 'No token, authorization denied' });
    }
    else if (await Employee.findById(req.user?.id).company !== req.params?.id) {
        res.status(403).json({message: 'You can only fetch your own company\'s employee list.'});
    }
    const company = await Company.findById(req.params?.id)
        .populate('_employees')
        .catch(err => res.status(500).json({message: 'Error finding Company', err}));
    res.status(200).json(company?._employees);
}

const createCompany = async (req, res) => {
    if (!req.user) {
        res.status(401).json({ message: 'No token, authorization denied' });
    }
    const company = new Company(req.body);
    await company.save().then(() => {
        console.log('Company saved');
        res.status(201).json(company);
    }).catch(err => res.status(500).json({message: 'Error saving Company', err}));
}

const updateCompany = async(req, res) => {
    if (!req.user) {
        res.status(401).json({ message: 'No token, authorization denied' });
    }
    const company = await Company.findByIdAndUpdate(req.params?.id, req.body).then(updatedCompany => {
        console.log('Company Updated');
        res.status(200).json(updatedCompany);
    }).catch(err => res.status(500).json({message: 'Error updating Company', err}));
    
}

const deleteCompany = async (req, res) => {
    if (!req.user) {
        res.status(401).json({ message: 'No token, authorization denied' });
    }
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