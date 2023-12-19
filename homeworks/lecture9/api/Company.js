const Company = require("../models/Company");

const createCompany = async (req, res) => {
  try {
    const { name, description, headquarters, industry } = req.body;
    const company = await Company.create({
      name,
      description,
      headquarters,
      industry,
    });
    console.log(company);
    res.status(200).json(company);
  } catch (err) {
    res.status(422).json(err);
  }
};

const findCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params?.id);
    res.status(200).json(company);
  } catch (err) {
    res.status(420).json(err);
  }
};

const updateCompanyById = async (req, res) => {
  // let res = await Company.findByIdAndUpdate(
  //   id,
  //   {
  //     $set: comp,
  //   },
  //   { new: true }
  // );
  try {
    const company = await Company.findById(req.params?.id);

    company.name = req.body.name ?? company.name;
    company.description = req.body.description ?? company.description;
    company.headquarters = req.body.headquarters ?? company.headquarters;
    company.industry = req.body.industry ?? company.industry;

    await company.save();
    res.status(200).json(company);
  } catch (err) {
    res.status(422).json(err);
  }
};

const deleteCompanyById = async (req, res) => {
  const id = req.params?.id;
  try {
    const company = await Company.findById(id);
    if (company) {
      await company.deleteOne();
      res.status(200).json(company);
    }
  } catch (err) {
    res.status(422).json();
  }
};

const findAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (err) {
    res.status(422).json(err);
  }
};

module.exports = {
  createCompany,
  findCompanyById,
  updateCompanyById,
  deleteCompanyById,
  findAllCompanies,
};
