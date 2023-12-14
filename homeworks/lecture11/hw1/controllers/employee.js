const Employee = require("../models/employee");
const Company = require("../models/company");

// - Get an employee by id
const getOneEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
// - Create a new employee
const createOneEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
// - Update an employee by id
const updateOneEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
// - Delete an employee by id
const deleteOneEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// - Get all employees
const getAllEmployee = async (req, res) => {
  try {
    let employees;
    if (req.company) {
      employees = await Employee.find();
    } else {
      employees = await Employee.find(
        {},
        {
          firstName: 1,
          lastName: 1,
          company: 0,
          startDate: 0,
          jobTitle: 0,
          resigned: 0,
          salary: 0,
          _manager: 0,
        }
      );
    }
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
module.exports = {
  getOneEmployee,
  createOneEmployee,
  updateOneEmployee,
  deleteOneEmployee,
  getAllEmployee,
};
