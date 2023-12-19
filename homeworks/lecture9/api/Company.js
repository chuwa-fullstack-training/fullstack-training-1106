const Company = require("../models/Company");
const mongoose = require("mongoose");

async function createCompany(defaultObj = {}) {
  let { name, description, headquarters, industry } = defaultObj;
  name = name || "ABC";
  description = description || "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
  headquarters = headquarters || "Los Angeles";
  industry = industry || "Tech";
  const company = await Company.create({
    name,
    description,
    headquarters,
    industry,
  });
  return company;
}

async function findCompanyById(id = "657b8393013591b7aa2d95dd") {
  const ID = new mongoose.Types.ObjectId(id);
  const company = await Company.findById(ID);
  return company;
}

async function updateCompanyById(id = "", comp = {}) {
  let res = await Company.findByIdAndUpdate(
    id,
    {
      $set: comp,
    },
    { new: true }
  );

  console.log("Company updated");
  company = await findCompanyById(id);
  return company;
}

async function deleteCompanyById(id = "") {
  console.log(id);
  const company = await Company.findById(id);
  if (company) {
    let res = await company.deleteOne();
    console.log("Company deleted");
    return res;
  } else {
    console.log("Company not found");
    return null;
  }
}

async function findAllCompanies() {
  const companies = await Company.find();
  return companies;
}

module.exports = {
  createCompany,
  findCompanyById,
  updateCompanyById,
  deleteCompanyById,
  findAllCompanies,
};
