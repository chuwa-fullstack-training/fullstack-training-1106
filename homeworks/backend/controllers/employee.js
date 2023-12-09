const Employee = require('../models/Employee');
const Company = require('../models/Company');

const createEmployee = async (req, res) => {
  try {
    // save the employee
    const employee = new Employee(req.body);
    await employee.save();
    
    // add the employee to the company
    const company = await Company.findById(req.user.id).select('-password');
    
    res.status(201).json({ message: 'Employee created' });
    // res.status(200).json(employee);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const updateEmployee = async (req, res) => {
  try {
    // find the employee
    const employee = await Employee.findById(req.params?.id);

    // update the employee
    employee.name = req.body.name ?? employee.name;
    employee.description = req.body.description ?? employee.description;
    employee.headquarters = req.body.headquarters ?? employee.headquarters;
    employee.industry = req.body.industry ?? employee.industry;

    // save the employee
    await employee.save();
    res.json(employee);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const getOneEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params?.id);
    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params?.id);
    res.status(204).json({ message: 'Employee deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  createEmployee,
  updateEmployee,
  getOneEmployee,
  getAllEmployees,
  deleteEmployee
};
