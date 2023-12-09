const express = require("express");
const router = express.Router();
const { Company, Employee } = require("../config/schema");
const auth = require("../middlewares/auth");

router.get("", async (req, res, next) => {
  try {
    const companies = await Company.find().select("-employees");
    res.json(companies);
  } catch (error) {
    next({ statusCode: 500, message: error.message });
  }
});

router.post("", auth, async (req, res, next) => {
  if (!req.user) {
    next({ statusCode: 401, message: "Not authorized" });
    return;
  }
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

router.get("/:id", auth, async (req, res, next) => {
  const companyId = req.params.id;
  try {
    const company = await Company.findById(companyId);
    if (!company) {
      next({ statusCode: 404, message: "company not found" });
      return;
    }

    if (!req.user || !existEmployee(company, req.user.id)) {
      company.employees = undefined;
      res.json(company);
      return;
    }
    await company.populate("employees");
    res.json(company);
    return;
  } catch (error) {
    next({ statusCode: 500, message: error.message });
  }
});

router.get("/:id/employees", auth, async (req, res, next) => {
  if (!req.user) {
    next({ statusCode: 401, message: "Not authorized" });
    return;
  }
  const companyId = req.params.id;
  try {
    const company = await Company.findById(companyId);
    if(!existEmployee(company, req.user.id)) {
      next({ statusCode: 401, message: "Not authorized" });
      return;
    }
    await company.populate("employees");
    res.json(company.employees);
  } catch {
    next({ statusCode: 500, message: error.message });
  }
});

router.put("/:id", async (req, res, next) => {
  if (!req.user) {
    next({ statusCode: 401, message: "Not authorized" });
    return;
  }
  const companyId = req.params.id;
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

router.delete("/:id", auth, async (req, res, next) => {
  if (!req.user) {
    next({ statusCode: 401, message: "Not authorized" });
    return;
  }
  const companyId = req.params.id;
  try {
    const company = await Company.findById(companyId);
    if(!company) {
      next({statusCode: 404, message: "Company not found"});
      return;
    }
    if(!existEmployee(company, req.user.id)) {
      next({ statusCode: 401, message: "Not authorized" });
      return;
    }
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

const existEmployee = (company, employeeId) => {
  return company.employees?.some((element) => element.equals(employeeId));
}

module.exports = router;
