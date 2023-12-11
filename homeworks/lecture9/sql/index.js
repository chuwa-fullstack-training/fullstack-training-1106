const e = require('express');
const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('test', 'training', 'shangan', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connected to MySQL DB.');
    })
    .catch(err => {
        console.log('Error connecting to MySQL DB:', err);
    });

const Company = sequelize.define('companies', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Employee = sequelize.define('employees', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    jobTitle: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

Employee.Company = Employee.belongsTo(Company, { as: 'company' });

// Create a new company
function createCompany({name}) {
    return Company.create({name});
}

// Create a new employee
function createEmployee({firstName, lastName, jobTitle}) {
    return Employee.create({firstName, lastName, jobTitle});
}

// Get all companies
function getAllCompanies() {
    return Company.findAll();
}

// Get all employees
function getAllEmployees() {
    return Employee.findAll();
}

// Get all employees of a company
function getEmployeesOfCompany(companyId) {
    return Employee.findAll({
        where: {
            companyId
        }
    });
}

// Get a company by id
function findCompanyById(id, callback) {
    return User.findByPk(id).then(company => {
      if (callback) return callback(company);
      console.log(company.name);
      return Promise.resolve(company);
    });
}

// Get an employee by id
function findEmployeeById(id, callback) {
    return Employee.findByPk(id).then(employee => {
      if (callback) return callback(employee);
      console.log(employee.firstName, employee.lastName, employee.jobTitle);
      return Promise.resolve(employee);
    });
}

// Update a company by id
function updateCompany(id) {
    return findCompanyById(id, company => {
      company.name = 'Amazon';
      return company.save();
    });
 }

// Update an employee by id
function updateEmployee(id) {
    return findEmployeeById(id, employee => {
      employee.firstName = 'John';
      employee.lastName = 'Doe';
      employee.jobTitle = 'Senior Developer';
      return employee.save();
    });
}

// Delete a company by id
function deleteCompany(id) {
    return findCompanyById(id, company => {
      return company.destroy();
    });
}

// Delete an employee by id
function deleteEmployee(id) {
    return findEmployeeById(id, employee => {
      return employee.destroy();
    });
}


sequelize
  .sync({ force: true })
  .then(() => {
    // console.log('tables created successfully!');
    // createEmployee({ firstName: 'Steve', lastName: 'Smith', jobTitle: 'Developer' });
    // return findAllUsers();
    // return findUserById(1);
    // return updateUser(1);
    // return deleteUser(1);;
    return Employee.create(
        {
            firstName: 'Tsit-tin',
            LastName: 'Tan',
            jobTitle: 'Junior Developer',
            company: {
                name: 'Google',
                description: 'A multinational technology company that specializes in Internet-related services and products.',
                headquarters: 'Mountain View, California, United States',
                industry: 'Technology'
            }
        },
        { include: [Employee.Company] }
    );
  })
  .then(employee => console.log(employee.firstName, employee.company.name))
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    sequelize.close();
  });







