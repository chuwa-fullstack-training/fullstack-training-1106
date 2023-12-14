const createCompany = require('../models/create-company.js');
const findCompanyById = require('../models/find-company.js');
const updateCompanyById = require('../models/update-company.js');
const deleteCompanyById = require('../models/delete-company.js');
const findAllCompanies = require('../models/find-all-companies.js');



const CreateCompany = async (req, res) => {
    try {
        const company = await createCompany(req.body);
        res.status(201).json(company);
    } catch (e) {
        res.status(500).send(e.message);
    }
};

const FindAllCompanies = async (_, res) => {
    try {
        const companies = await findAllCompanies();
        res.json(companies);
    } catch (e) {
        res.status(500).send(e.message);
    }
};


const UpdateCompanyById = async (req, res) => {
    try {
        const id = req.params.id;
        const company = await updateCompanyById(id, req.body);
        res.json(company);
    } catch (e) {
        res.status(500).send(e.message);
    }
};


const FindCompanyById = async (req, res) => {
    try {
        const id = req.params.id;
        const company = await findCompanyById(id);
        res.json(company);
    } catch (e) {
        res.status(500).send(e.message);
    }
};

const DeleteCompanyById = async (req, res) => {
    try {
        const id = req.params.id;
        await deleteCompanyById(id);
        res.status(204).json({ message: 'Company deleted' });
    } catch (e) {
        res.status(500).send(e.message);
    }
};

module.exports = {
    CreateCompany,
    FindAllCompanies,
    UpdateCompanyById,
    FindCompanyById,
    DeleteCompanyById
}
