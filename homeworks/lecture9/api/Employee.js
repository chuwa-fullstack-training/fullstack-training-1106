const Employee = require("../models/Employee");
const Company = require("../models/Company");

const createEmployee = async (req, res) => {
  try {
    const company = await Company.findById(req.body.company);
    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }
    const employee = new Employee(req.body);
    await employee.save();
    res.status(200).json(employee);
  } catch (err) {
    console.log(err.message);
    res.status(422).json(err);
  }
};

const findEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params?.id);
    res.status(200).json(employee);
  } catch (err) {
    res.status(422).json(err);
  }
};

const updateEmployeeById = async (req, res) => {
  // let employee = await Employee.findByIdAndUpdate(
  //   id,
  //   {
  //     $set: emp,
  //   },
  //   { new: true }
  // );

  try {
    const employee = await Employee.findById(req.params?.id);
    employee.firstName = req.body.firstName ?? employee.firstName;
    employee.lastName = req.body.lastName ?? employee.lastName;
    employee.company = req.body.company ?? employee.company;
    employee.startDate = req.body.startDate ?? employee.startDate;
    employee.jobTitle = req.body.jobTitle ?? employee.jobTitle;
    employee.resigned = req.body.resigned ?? employee.resigned;
    employee.salary = req.body.salary ?? employee.salary;
    await employee.save();
    res.status(200).json(employee);
  } catch (err) {
    res.status(422).json(err);
  }
};

const deleteEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params?.id);
    res.status(200).json(employee);
  } catch (err) {
    res.status(422).json();
  }
};

const findAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    res.status(422).json(err);
  }
};

const findAllEmployeesByCompany = async (req, res) => {
  try {
    const employees = await Employee.find({ company: req.params?.id });
    res.status(200).json(employees);
  } catch (err) {
    res.status(422).json(err);
  }
}

module.exports = {
  createEmployee,
  findEmployeeById,
  updateEmployeeById,
  deleteEmployeeById,
  findAllEmployees,
  findAllEmployeesByCompany,
};
