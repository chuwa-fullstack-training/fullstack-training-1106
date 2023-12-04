const express = require("express");
const router = express.Router();
const { Employee, Company } = require("../config/schema");

router.get("/all", async (req, res, next) => {
  try {
    const employees = await Employee.find().populate({
      path: "company",
      model: "Company",
      select: "-employees",
    });
    res.json(employees);
  } catch (error) {
    next({ statusCode: 500, message: error.message });
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newEmployee = new Employee({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      company: req.body.company,
      startDate: req.body.startDate,
      jobTitle: req.body.jobTitle,
      resigned: req.body.resigned,
      salary: req.body.salary,
    });
    let postCompany;
    if (req.body.company) {
      postCompany = await Company.findById(newEmployee.company);
      if (!postCompany) {
        next({ statusCode: 404, message: "company not found" });
        return;
      }
    }

    await newEmployee.save();
    postCompany.employees.push(newEmployee._id);
    await postCompany.save();
    const createdEmployee = await Employee.findById(newEmployee._id).populate(
      "company"
    );
    res.json(createdEmployee);
  } catch (error) {
    next({ statusCode: 500, message: error.message });
  }
});

router.get("/", async (req, res, next) => {
  const employeeId = req.body._id;
  try {
    const employee = await Employee.findById(employeeId).populate("company");
    if (!employee) {
      next({ statusCode: 404, message: "employee not found" });
      return;
    }
    res.json(employee);
  } catch (error) {
    next({ statusCode: 500, message: error.message });
  }
});

router.put("/", async (req, res, next) => {
  const employeeId = req.body._id;
  try {
    const updateEmployee = new Employee({
      _id: employeeId,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      company: req.body.company,
      startDate: req.body.startDate,
      jobTitle: req.body.jobTitle,
      resigned: req.body.resigned,
      salary: req.body.salary,
    });
    let updateCompany;
    if (updateEmployee.company) {
      updateCompany = await Company.findById(updateEmployee.company);
      if (!updateCompany) {
        next({ statusCode: 404, message: "company not found" });
        return;
      }
    }
    if (!updatedEmployee) {
      next({ statusCode: 404, message: "employee not found" });
      return;
    }
    const currCompanyStored = await Employee.findById(employeeId).select(
      "company"
    );
    const currCompanyId = currCompanyStored.company;
    const updatedEmployee = await Employee.findByIdAndUpdate(
      employeeId,
      updateEmployee,
      { new: true }
    );
    // update company accordingly
    if (currCompanyId) {
      const currCompany = await Company.findById(currCompanyId);
      currCompany.employees = currCompany.employees.filter(
        (element) => !element.equals(employeeId)
      );
      await currCompany.save();
    }
    if (updateCompany) {
      updateCompany.employees = updateCompany.employees.filter(
        (element) => !element.equals(employeeId)
      );
      updateCompany.employees.push(employeeId);
      await updateCompany.save();
    }
    const populatedEmployee = await updatedEmployee.populate("company");

    res.json(populatedEmployee);
  } catch (error) {
    next({ statusCode: 500, message: error.message });
  }
});

router.delete("/", async (req, res, next) => {
  const employeeId = req.body._id;
  try {
    const currCompanyStored = await Employee.findById(employeeId).select(
      "company"
    );
    if (currCompanyStored) {
      const currCompanyId = currCompanyStored.company;
      const currCompany = await Company.findById(currCompanyId);
      currCompany.employees = currCompany.employees.filter(
        (element) => !element.equals(employeeId)
      );
      await currCompany.save();
      await Employee.deleteOne({ _id: employeeId });
    }
    res.json({ _id: employeeId });
  } catch (error) {
    next({ statusCode: 500, message: error.message });
  }
});

module.exports = router;
