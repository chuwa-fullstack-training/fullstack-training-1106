const Employee = require('../models/Employee');
const Company = require('../models/Company');

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getOneEmployeePartial = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params?.id);
    res.status(200).json({
      firstName: employee.firstName,
      lastName: employee.lastName
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getOneEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params?.id);
    res.status(200).json(employee);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getAllEmployeesByCompany = async (req, res) => {
  try {
    const user = await Employee.findById(req.params?.login);
    const employees = await Employee.find({ company: user.company });
    res.status(200).json(employees);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
}

const createEmployee = async (req, res) => {
  try {
    // find employee company
    const company = await Company.findById(req.body.company);
    if (!company) {
      return res.status(404).json({ message: 'Company not found' });
    }
    // create employee & add uemployee to the company
    const employee = new Employee(req.body);
    company.employees.push(employee.id);
    // save 
    await employee.save();
    await company.save();
    res.status(201).json({ message: 'Employee created' });
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
    employee.firstName = req.body.firstName ?? employee.firstName;
    employee.lastName = req.body.lastName ?? employee.lastName;
    employee.startDate = req.body.startDate ?? employee.startDate;
    employee.jobTitle = req.body.jobTitle ?? employee.jobTitle;
    employee.resigned = req.body.resigned ?? employee.resigned;
    employee.salary = req.body.salary ?? employee.salary;
    // update company
    if (req.body.company) {
      const companyPrev = await Company.findById(employee.company);
      companyPrev.employees.remove(req.params?.id);
      await companyPrev.save();
      employee.company = req.body.company;
      const companyCurr = await Company.findById(employee.company);
      companyCurr.employees.push(req.params?.id);
      await companyCurr.save();
      employee.manager = undefined;
    }
    // update manager
    employee.manager = req.body.manager ?? employee.manager;
    // save the employee
    await employee.save();
    res.status(201).json({ message: 'Employee updated' });
    // res.status(200).json(employee);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    // delete employee
    const employee = await Employee.findByIdAndDelete(req.params?.id);
    // find all employees whose  manager is that employee and remove the manager
    const subordinates = await Employee.find({ manager: req.params?.id });
    subordinates.forEach(async subordinate => {
      subordinate.manager = undefined;
      await subordinate.save();
    });
    // remove employee from company
    const company = await Company.findById(employee.company);
    company.employees.remove(employee.id);
    await company.save();
    res.status(204).json({ message: 'Employee deleted' });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getAllEmployees,
  getOneEmployeePartial,
  getOneEmployee,
  getAllEmployeesByCompany,
  createEmployee,
  updateEmployee,
  deleteEmployee
};
