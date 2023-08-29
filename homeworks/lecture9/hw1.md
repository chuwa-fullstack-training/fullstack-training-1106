Create a set of APIs to manage employees and companies. The data should be stored in MongoDB. The API should support the following operations:

- Create a new company
- Create a new employee
- Get a company by id
- Get an employee by id
- Update a company by id
- Update an employee by id
- Delete a company by id
- Delete an employee by id
- Get all companies
- Get all employees
- Get all employees of a company

The Company schema should have the following fields:

- name: String
- description: String
- headquarters: String
- industry: String
- _employees: [EmployeeSchema]_

The Employee schema should have the following fields:

- firstName: String
- lastName: String
- company: CompanySchema
- startDate: Date
- jobTitle: String
- resigned: Boolean
- salary: Number
- _manager: EmployeeSchema_ (optional)
