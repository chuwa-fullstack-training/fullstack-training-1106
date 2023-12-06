const mongoose = require('mongoose');
const Company = require('../models/Company');

//Create a new company
const createNewCompany = (req, res) =>{
    const company = new Company(req.body);

    company
        .save()
        .then(()=>{
            console.log(`Company: ${company.name} has created.`)
            res.status(201).json({result:'create success'});
        })
        .catch(e=>{
            console.log(e);
            res.status(500).json({result:'Server Error'});
        })
};

//Get a company by id
const getCompanyById = (req, res)=>{
    const id = new mongoose.Types.ObjectId(req.params?.id);

    Company
        .findById(id)
        .then((company)=>{
            if(company === null){
                res.status(404).json({result: 'Not Found'});
            }
            else{
                console.log(company);
                res.status(200).json(company);
            }
        })
        .catch(e=>{
            console.log(e);
            res.status(500).json({result:'Server Error'});
        });
};

//Update a company by id
const updateCompanyById = (req, res)=>{
    const id = new mongoose.Types.ObjectId(req.params?.id);

    Company.findByIdAndUpdate(id, req.body, {returnDocument: 'after'})
        .then((doc)=>{
            if(doc === null){
                res.status(404).json({result: 'Not Found'});
            }
            else{
                console.log(`CompanyId: ${req.params?.id} has updated.`)
                res.status(200).json(doc);
            }
        })
        .catch(e=>{
            console.log(e);
            res.status(500).json({result:'Server Error'});
        });
};

//Delete a company by id
const deleteCompanyById = (req,res)=>{
    const id = new mongoose.Types.ObjectId(req.params?.id);

    Company.findByIdAndDelete(id)
        .then((doc)=>{
            if(doc === null){
                res.status(404).json({result: 'Not Found'});
            }
            else{
                console.log(`CompanyId: ${req.params?.id} has deleted.`)
                res.status(204).json({result:'delete success'});
            }
        })
        .catch(e=>{
            console.log(e);
            res.status(500).json({result:'Server Error'});
        });
};

//Get all companies
const getAllCompanies = (req,res)=>{
    Company.find()
        .then((companies)=>{
            console.log(companies);
            res.status(200).json(companies);
        })
        .catch((e)=>{
            console.log(e);
            res.status(500).json({result:'Server Error'});
        });
};

module.exports = {
    createNewCompany,
    getCompanyById,
    updateCompanyById,
    deleteCompanyById,
    getAllCompanies
};