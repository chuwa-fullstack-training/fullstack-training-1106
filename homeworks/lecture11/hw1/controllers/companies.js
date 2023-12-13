const data = require('../data');
const mongoose = require('mongoose');
const companyData = data.company;

const createcompany = async (req,res) => {
    const {name,description,headquarters,industry} = req.body;
    let resp = await companyData.createCompany(name,description,headquarters,industry);
    res.send(resp);
};

const create = (req,res) => {
    res.send('This is your create page');
};

const getcompany = async (req,res) => {
    const id = new mongoose.Types.ObjectId(req.params.id);
    let resp = await companyData.getCompanyById(id);
    res.send(resp);
};

const updatecompany = async (req,res) => {
    const id = req.params.id;
    let resp = await companyData.updateCompanyById(id,req.body);
    res.send(resp);
};

const deletecompany = async (req,res) => {
    const id = req.params.id;
    let resp = await companyData.deleteCompanyById(id);
    res.send(resp);
};

const getallcompanies = async (req,res) => {
    let resp = await companyData.getAllCompanies();
    res.send(resp);
};

module.exports ={
    createcompany,
    create,
    getcompany,
    getallcompanies,
    updatecompany,
    deletecompany
}