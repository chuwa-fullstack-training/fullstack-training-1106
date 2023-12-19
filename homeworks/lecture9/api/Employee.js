const Employee = require("../models/Employee");

async function createEmployee(defaultObj = {}) {
  let { firstName, lastName, company, jobTitle, resigned, salary } = defaultObj;
  firstName = firstName || "Yiqian";
  lastName = lastName || "Yang";
  company = company || "65818899ed0a492b4ede7dc2";
  jobTitle = jobTitle || "Dummie";
  resigned = resigned || false;
  salary = salary || -1;

  const employee = await Employee.create({
    firstName,
    lastName,
    company,
    jobTitle,
    resigned,
    salary,
  });
  return employee;
}

async function findEmployeeById(id = "") {
  const employee = await Employee.findById(id);
  return employee;
}

async function updateEmployeeById(id = "", emp = {}) {
  let employee = await Employee.findByIdAndUpdate(
    id,
    {
      $set: emp,
    },
    { new: true }
  );

  console.log("Employee updated");
  employee = await findEmployeeById(id);
  return employee;
}

async function deleteEmployeeById(id = "") {
  const employee = await Employee.findById(id);
  if (employee) {
    let res = await employee.deleteOne();
    console.log("Employee deleted");
    return res;
  } else {
    console.log("Employee not found");
    return null;
  }
}

async function findAllEmployees() {
  const employees = await Employee.find();
  return employees;
}

async function findAllEmployeesByCompany(companyId = "") {
  const employees = await Employee.find({ company: companyId });
  return employees;
}

module.exports = {
  createEmployee,
  findEmployeeById,
  updateEmployeeById,
  deleteEmployeeById,
  findAllEmployees,
  findAllEmployeesByCompany,
};
