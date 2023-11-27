Based on hw1 in lecture 9, you are required to implement authentication and authorization for the APIs.

1. Create a new API for login

   - `/api/login`, returning JWT token for authentication and authorization
   - you can use `firstName` as username and `lastName` as password or any other combination that make sense to you

2. Modify existing APIs to accomodate authentication and authorization as following:
   - only logged-in user can have access to get all information from employees, e.g.: logged-in user can retrieve all the fields of employees, while the anonymous can only get `firstName` and `lastName`
   - only logged-in user can have access to get all employees of it's own company, e.g.: employees with company A have access to get employees of company A, ONLY
