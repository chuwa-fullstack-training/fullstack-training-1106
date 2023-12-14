const Company = require("../models/company");
const Employee = require("../models/employee");

const getOneCompany = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    res.status(200).json(company);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

const createOneCompany = async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res.status(201).json(company);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

const updateOneCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(company);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteOneCompany = async (req, res) => {
  try {
    await Company.findByIdAndDelete(req.params.id);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// - Get all companies
const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// - Get all employees of a company
const getAllEmployeeOfCompany = async (req, res) => {
  try {
    if (req.company !== req.params.id) {
      throw new Error("Unauthorized");
    }
    const employees = await Company.findById(req.params.id)._employees;
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getOneCompany,
  createOneCompany,
  updateOneCompany,
  deleteOneCompany,
  getAllCompanies,
  getAllEmployeeOfCompany,
};
