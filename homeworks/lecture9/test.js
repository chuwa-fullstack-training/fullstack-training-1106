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

const c1 = "65818899ed0a492b4ede7dc2";
const c2 = "6581889bed0a492b4ede7dc6";

const e1 = "65821bbaa33b1130d4ff077c";
const e2 = "65821d06750fcfa1017fecec";
const e3 = "65821edf7c88859170779f0a";
async function test() {
  mongoose.connect(
    "mongodb+srv://yiqianya:icVUpbcXfX6NEcuW@cluster0.skhgha7.mongodb.net/"
  );

  /**
   * Test for company
   */

  //   await createCompany({
  //     name: "Apple",
  //     description:
  //       "Apple Inc. is an American multinational technology company headquartered in Cupertino, ",
  //     headquarters: "Cupertino, CA",
  //     industry: "Technology company",
  //   });

  //   await createCompany({
  //     name: "Google",
  //     description:
  //       "Google LLC is an American multinational technology company focusing on artificial ",
  //     headquarters: "Menlo Park, CA",
  //     industry: "Technology company",
  //   });

  //const comp = await findCompanyById(c1);
  //console.log(comp);

  //   await updateCompanyById(c1, {
  //     name: "Apple",
  //     description:
  //       "Apple Inc. is an American multinational technology company headquartered in Cupertino, " +
  //       "California, that designs, develops, and sells consumer electronics, computer software, and online services." +
  //       "It is considered one of the Big Five companies in the U.S. information technology industry, along with Amazon, " +
  //       "Google, Microsoft, and Facebook.",
  //     headquarters: "Cupertino, CA",
  //     industry: "Technology company",
  //   });

  //await deleteCompanyById(c2);

  //const companies = await findAllCompanies();
  //console.log(companies);

  /**
   * Test for employee
   */

//     await createEmployee({
//       firstName: 'Steve',
//       lastName: 'Jobs',
//       company: c1,
//       jobTitle: 'CEO',
//       resigned: true,
//       salary: 1000000,
//     });

//     await createEmployee({
//       firstName: 'Tim',
//       lastName: 'Cook',
//       company: c1,
//       jobTitle: 'CEO',
//       resigned: false,
//       salary: 100000,
//     });

//   await createEmployee({});

  //   const emp = await findEmployeeById(e1);
  //   console.log(emp);

  //   await updateEmployeeById(e2, {
  //     company: c1,
  //     resigned: false,
  //   })

  //await deleteEmployeeById(e3);

//   const employees = await findAllEmployeesByCompany(c2);
//   console.log(employees);

  mongoose.connection.close();
}

test();
