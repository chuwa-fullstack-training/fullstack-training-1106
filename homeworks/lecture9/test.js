const mongoose = require('mongoose');
const connectDB = require('./db/connect');
const {
  createCompany,
  updateCompany,
  getOneCompany,
  getAllCompanies,
  deleteCompany
} = require('./controllers/company');
const {
  createEmployee,
  updateEmployee,
  getOneEmployee,
  getAllEmployees,
  getAllEmployeesByCompany,
  deleteEmployee
} = require('./controllers/employee');
const Company = require('./models/Company');
const Employee = require('./models/Employee');

const c1 = '65740d1d84b5cfa61edfe2de';
const c2 = '65740d1d84b5cfa61edfe2e0';

const e1 = '65743ea86071b0c30fb6dd4f';
const e2 = '6574404a4262b90163285bb8';
const e3 = '657441032976a207845d8318';

async function test() {
  await connectDB();

  /**
   * Test for company
   */

  // await createCompany({
  //   name: 'Apple',
  //   headquarters: 'Cupertino, CA',
  //   industry: 'Technology company'
  // });

  // await createCompany({
  //   name: 'Google',
  // });

  // await updateCompany(c1, {
  //   name: 'Apple',
  //   description: 'Apple Inc. is an American multinational technology company headquartered in Cupertino, ' +
  //     'California. As of March 2023, Apple is the world\'s largest company by market capitalization, '  +
  //     'and with US$394.3 billion the largest technology company by 2022 revenue.',
  //   headquarters: 'Cupertino, CA',
  //   industry: 'Technology company'
  // });

  // await updateCompany(c2, {
  //   name: 'Google',
  //   description: 'Google LLC is an American multinational technology company focusing on artificial ' +
  //     'intelligence, online advertising, search engine technology, cloud computing, computer software, ' + 
  //     'quantum computing, e-commerce, and consumer electronics.',
  //   headquarters: 'Menlo Park, CA',
  //   industry: 'Technology company'
  // });

  // await getOneCompany(c1);

  // await getAllCompanies();

  // await deleteCompany(c2);
  // await deleteCompany(c1);

  /**
   * Test for employee
   */

  // await createEmployee({
  //   firstName: 'Steve',
  //   lastName: 'Jobs',
  //   company: c1,
  //   jobTitle: 'CEO',
  //   resigned: true,
  //   salary: 1000000,
  // });
  
  // await createEmployee({
  //   firstName: 'David',
  //   lastName: 'Chen',
  //   company: c1,
  //   jobTitle: 'SDE',
  //   resigned: false,
  //   salary: 100000,
  //   manager: e1
  // });

  // await createEmployee({
  //   firstName: 'John',
  //   lastName: 'Wang',
  //   company: c2,
  //   jobTitle: 'SDE',
  //   resigned: false,
  //   salary: 100000,
  //   manager: e2
  // });

  // await updateEmployee(e2, {
  //   company: c2
  // })

  // await deleteEmployee(e1);
  // await getOneEmployee(e2);
  // await getOneCompany(c1);
  // await getOneCompany(c2);

  await getAllEmployeesByCompany(c1);

  mongoose.connection.close();
}

test();