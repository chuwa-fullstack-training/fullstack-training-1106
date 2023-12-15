const Company = require("../models/Company");

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

async function updateCompanyById(id = "12345", newObj = {}) {
  const company = await Company.findOne({ id });
  if (!company) {
    throw Error("Company Not Found");
  }
  if ("_employees" in newObj && newObj["_employees"] instanceof Array) {
    try {
      newObj["_employees"] = newObj["_employees"].map(
        (v) => new mongoose.Types.ObjectId(v)
      );
    } catch (e) {
      throw Error("Unable to create object id");
    }
  }
  let res = await company.updateOne(newObj);
  console.log("Company updated");
  console.log(res);
  company = await findCompanyById(id);
  return company;
}

async function deleteCompanyById(id = "12345") {
  const company = await Company.findOne({ id });
  if (company) {
    let res = await company.deleteOne();
    console.log("Company deleted");
    return res;
  } else {
    res.status(422).json("Company not found");
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
