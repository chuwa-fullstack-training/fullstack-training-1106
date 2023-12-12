const Employee = require('../models/Employee')

// Create a new employee
const createEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json({ message: 'Employee created'});
  } catch(err) {
    console.log(err.message);
    res.status(500).json({ message: 'Server Error'});
  }
}


// Get an employee by id
const getOneEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params?.id);
    if(employee) {
      res.json(employee);
    } else {
      res.status(404).send('404 not found');
    }
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};



// - Update an employee by id
const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params?.id);
    employee.jobTitle =  req.body.jobTitle ?? employee.jobTitle;
    employee.salary =  req.body.salary ?? employee.salary;

    await employee.save();
    res.json(employee);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};



// - Delete an employee by id
const deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params?.id);
    res.status(204).json({ message: 'Employee deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};
  


// Get all employees
const getAllEmployees = async (req, res) => {
  try {
    const employee = await Employee.find();
    res.status(200).json(employee);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};



// Get all employees of a company
const getAllEmployeesofCompany = async (req, res) => {
  try {
      const employees = await Employee.find({ company: req.params.companyId }).populate('company manager');
      res.status(200).json(employees);
  } catch(err) {
      res.status(500).json({ message: 'Server Error'});
  }
}


module.exports = {
  createEmployee,
  getOneEmployee,
  updateEmployee,
  deleteEmployee,
  getAllEmployees,
  getAllEmployeesofCompany
}
