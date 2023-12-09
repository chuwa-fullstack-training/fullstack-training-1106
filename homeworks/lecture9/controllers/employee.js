const Employee = require('../models/Employee');
const Company = require('../models/Company');

const createEmployee = async input => {
  try {
    // find employee company
    const company = await Company.findById(input.company);
    if (!company) {
      throw new Error('Company not found');
    }

    // create employee & add uemployee to the company
    const employee = new Employee(input);
    company.employees.push(employee.id);

    // save 
    await employee.save();
    await company.save();
    console.log('Employee saved');
  } catch (err) {
    console.log(err.message);
  }
};

const updateEmployee = async (id, input) => {
  try {
    // find the employee
    const employee = await Employee.findById(id);

    // update the employee
    employee.firstName = input.firstName ?? employee.firstName;
    employee.lastName = input.lastName ?? employee.lastName;
    employee.startDate = input.startDate ?? employee.startDate;
    employee.jobTitle = input.jobTitle ?? employee.jobTitle;
    employee.resigned = input.resigned ?? employee.resigned;
    employee.salary = input.salary ?? employee.salary;

    // update company
    if (input.company) {
      const companyPrev = await Company.findById(employee.company);
      companyPrev.employees.remove(id);
      await companyPrev.save();
      employee.company = input.company;
      const companyCurr = await Company.findById(employee.company);
      companyCurr.employees.push(id);
      await companyCurr.save();
      employee.manager = undefined;
    }

    // update manager
    employee.manager = input.manager ?? employee.manager;

    // save the employee
    await employee.save();
    console.log('Employee updated')
  } catch (err) {
    console.log('Error updating employee');
  }
};

const getOneEmployee = async id => {
  try {
    const employee = await Employee.findById(id);
    console.log(employee);
  } catch (err) {
    console.log('No employee found');
  }
};

const getAllEmployees = async () => {
  try {
    const employees = await Employee.find();
    console.log(employees);
  } catch (err) {
    console.error(err.message);
  }
};

const getAllEmployeesByCompany = async companyId => {
  try {
    const employees = await Employee.find({ company: companyId });
    console.log(employees);
  } catch (err) {
    console.error(err.message);
  }
}

const deleteEmployee = async id => {
  try {
    // delete employee
    const employee = await Employee.findByIdAndDelete(id);
    
    // find all employees whose  manager is that employee and remove the manager
    const subordinates = await Employee.find({ manager: id });
    subordinates.forEach(async subordinate => {
      subordinate.manager = undefined;
      await subordinate.save();
    });
    
    // remove employee from company
    const company = await Company.findById(employee.company);
    company.employees.remove(employee.id);
    await company.save();
    
    console.log('Employee deleted');
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  createEmployee,
  updateEmployee,
  getOneEmployee,
  getAllEmployees,
  getAllEmployeesByCompany,
  deleteEmployee
};
