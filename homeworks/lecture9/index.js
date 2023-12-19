const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());

const {
  createCompany,
  findCompanyById,
  updateCompanyById,
  deleteCompanyById,
  findAllCompanies,
} = require("./api/Company");

const {
  createEmployee,
  findEmployeeById,
  updateEmployeeById,
  deleteEmployeeById,
  findAllEmployees,
  findAllEmployeesByCompany,
} = require("./api/Employee");

const Company = require("./models/Company");
const Employee = require("./models/Employee");

mongoose.connect(
  "mongodb+srv://yiqianya:icVUpbcXfX6NEcuW@cluster0.skhgha7.mongodb.net/"
);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api", require("./routes/company"));
app.use("/api", require("./routes/employee"));

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
