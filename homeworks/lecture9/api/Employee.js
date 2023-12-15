const Employee = require("../models/Employee");

async function createEmployee(defaultObj = {}) {
  let { firstName, lastName, jobTitle, resigned, salary } = defaultObj;
  firstName = firstName || "Yiqian";
  lastName = lastName || "Yang";
  jobTitle = jobTitle || "Dummie";
  resigned = resigned || false;
  salary = salary || -1;

  const employee = await Employee.create({
    firstName,
    lastName,
    jobTitle,
    resigned,
    salary,
  });
  return employee;
}

async function findEmployeeById(id = "657b8393013591b7aa2d95dd") {
  const ID = new mongoose.Types.ObjectId(id);
  const employee = await Employee.findById(ID);
  return employee;
}

async function updateEmployeeById(id = "12345", newObj = {}) {
  const employee = await Employee.findOne({ id });
  if (!employee) {
    throw Error("Employee Not Found");
  }
  if ("_employees" in newObj && newObj["_employees"] instanceof Array) {
    try {
      newObj["_employees"] = newObj["_employees"].map(
        (v) => new mongoose.Types.ObjectId(v)
      );
    } catch (e) {
      throw Error("Unable to create object id");
    }
  }
  let company = await Employee.updateOne(newObj);
  return company;
}

async function deleteEmployeeById(id = "12345") {
  const employee = await Employee.findOne({ id });
  if (employee) {
    let res = await employee.deleteOne();
    console.log("Employee deleted");
    return res;
  } else {
    res.status(422).json("Employee not found");
  }
}

async function findAllEmployees() {
  const employees = await Employee.find();
  return employees;
}

module.exports = {
  createEmployee,
  findEmployeeById,
  updateEmployeeById,
  deleteEmployeeById,
  findAllEmployees,
};
