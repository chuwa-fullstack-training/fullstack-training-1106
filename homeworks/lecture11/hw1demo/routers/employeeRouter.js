const express = require("express");
const auth = require("../middlewares/auth");
const employeeRouter = express.Router();
const {
  createEmployee,
  getEmployeeById,
  updateEmployeeById,
  deleteEmployeeById,
  getAllEmployees,
} = require("../controllers/employeeController");

//Create a new employee
employeeRouter.post("/employees", auth, createEmployee);

//Get an employee by id
employeeRouter.get("/employees/:id", auth, getEmployeeById);

//Update an employee by id
employeeRouter.put("/employees/:id", auth, updateEmployeeById);

//Delete an employee by id
employeeRouter.delete("/employees/:id", auth, deleteEmployeeById);

//Get all employees
employeeRouter.get("/employees", auth, getAllEmployees);

module.exports = employeeRouter;
