const express = require("express");
const {
  createCompany,
  findCompanyById,
  updateCompanyById,
  deleteCompanyById,
  findAllCompanies,
} = require("../api/Company");

const router = express.Router();

router.get("/companies", findAllCompanies);

router.get("/companies/:id", findCompanyById);

router.post("/companies", createCompany);

router.put("/companies/:id", updateCompanyById);

router.delete("/companies/:id", deleteCompanyById);

module.exports = router;
