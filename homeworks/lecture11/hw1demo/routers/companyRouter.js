const express = require("express");
const auth = require("../middlewares/auth");
const companyRouter = express.Router();
const {
  createCompany,
  getCompanyById,
  updateCompanyById,
  deleteCompanyById,
  getAllCompanies,
  getAllEmployeesOfCompany,
} = require("../controllers/companyController");

//Create a new company
companyRouter.post("/companies", auth, createCompany);

//Get a company by id
companyRouter.get("/companies/:id", auth, getCompanyById);

//Update a company by id
companyRouter.put("/companies/:id", auth, updateCompanyById);

//Delete a company by id
companyRouter.delete("/companies/:id", auth, deleteCompanyById);

//Get all companies
companyRouter.get("/companies", auth, getAllCompanies);

//Get all employees of a company
companyRouter.get("/companies/:id/employees", auth, getAllEmployeesOfCompany);

module.exports = companyRouter;
