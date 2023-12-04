const express = require("express");
const router = express.Router();
const { Company, Employee } = require("../config/schema");

router.get("/all", async (req, res, next) => {
  try {
    const companies = await Company.find().populate("employees");
    res.json(companies);
  } catch (error) {
    next({ statusCode: 500, message: error.message });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newCompany = new Company({
      name: req.body.name,
      description: req.body.description,
      headquarters: req.body.headquarters,
      industry: req.body.industry,
    });
    if (newCompany.employees) {
      const allStatus = await Promise.all(
        newCompany.employees.map(async (employeeId) => {
          const valid = await validateEmployee(employeeId);
          return valid;
        })
      );
      const allValid = allStatus.every((valid) => valid);
      if (!allValid) {
        next({ statusCode: 404, message: "employees are not valid" });
        return;
      }
    }
    await newCompany.save();
    const createdCompany = await Company.findById(newCompany._id).populate(
      "employees"
    );
    res.json(createdCompany);
  } catch (error) {
    next({ statusCode: 500, message: error.message });
  }
});

router.get("/", async (req, res, next) => {
  const companyId = req.body._id;
  try {
    const company = await Company.findById(companyId).populate("employees");
    if (!company) {
      next({ statusCode: 404, message: "company not found" });
      return;
    }
    res.json(company);
  } catch (error) {
    next({ statusCode: 500, message: error.message });
  }
});

router.get("/employees", async (req, res, next) => {
  const companyId = req.body._id;
  try {
    const employees = await Company.findById(companyId)
      .select("employees")
      .populate("employees");
    res.json(employees);
  } catch {
    next({ statusCode: 500, message: error.message });
  }
});

router.put("/", async (req, res, next) => {
  const companyId = req.body._id;
  try {
    const updateCompany = new Company({
      _id: companyId,
      name: req.body.name,
      description: req.body.description,
      headquarters: req.body.headquarters,
      industry: req.body.industry,
      employees: req.body.employees,
    });
    if (updateCompany.employees) {
      const allStatus = await Promise.all(
        updateCompany.employees.map(async (employeeId) => {
          const valid = await validateEmployee(employeeId);
          return valid;
        })
      );
      const allValid = allStatus.every((valid) => valid);
      if (!allValid) {
        next({ statusCode: 404, message: "employees are not valid" });
        return;
      }
    }
    const updatedCompany = await Company.findByIdAndUpdate(
      companyId,
      updateCompany,
      { new: true }
    );
    if (!updatedCompany) {
      next({ statusCode: 404, message: "company not found" });
      return;
    }
    const populatedCompany = await updatedCompany.populate("employees");
    res.json(populatedCompany);
  } catch (error) {
    next({ statusCode: 500, message: error.message });
  }
});

router.delete("/", async (req, res, next) => {
  const companyId = req.body._id;
  try {
    await Employee.updateMany(
      { company: companyId },
      { $set: { company: null } }
    );
    await Company.deleteOne({ _id: companyId });
    res.json({ _id: companyId });
  } catch (error) {
    next({ statusCode: 500, message: error.message });
  }
});

const validateEmployee = async (employeeId) => {
  const exist = await Employee.findById(employeeId);
  return exist !== null;
};

module.exports = router;
