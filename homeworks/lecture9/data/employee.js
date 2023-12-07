const mongoose = require('./connect');
const {Employee,Company } = require('./schema');

const createEmployee = async (firstName, lastName, company, startDate, jobTitle, resigned, salary, _manager) => {
    const employee = new Employee({
        firstName: firstName,
        lastName: lastName,
        company: company,
        startDate: startDate,
        jobTitle: jobTitle,
        resigned: resigned,
        salary: salary,
        _manager: _manager
      });
      let newID;
      let resp = await employee
        .save()
        .then((employee) => {
          console.log('Company saved');
          newID = employee.id;
          return 'Success';
        })
        .catch(err => {
          console.log('Error', err);
        });
    let com = await Company.findById(company);
    com._employees.push(newID);
    com
        .save()
        .catch(err => {
        console.log('Error updating user', err);
        });
    return resp;
}
const getEmployeeById = async (id) => {
      let resp = await Employee.findById(id)
                    .then(employee => {
                        console.log(employee);
                        return user;
                    })
                    .catch(err => {
                        console.log('Error finding user', err);
                    });
    return resp;

}
const updateEmployeeById = async (id, args) => {
    let {firstName, lastName} = args;
    let resp = await Employee.findByIdAndUpdate(ID, {
                    firstName: firstName,
                    lastName: lastName
                })
                    .then(() => {
                    console.log('User updated');
                    return 'Updated';
                    })
                    .catch(err => {
                    console.log('Error updating user', err);
                    });
    return resp;
      
}
const deleteEmployeeById = async (id) => {
    let resp = await Employee.findByIdAndDelete(id)
        .then(res => {
            console.log('User deleted', res);
            return 
        })
        .catch(err => {
            console.log('Error deleting user', err);
        });
    return resp;
}
const getAllEmployees = async () => {
   let resp = await Employee.find()
        .then(employees => {
            console.log(employees);
            return employees
        })
        .catch(err => {
            console.log('Error finding users', err);
        });
    return resp;
}
const getEmployeesOfCom = async (id) => {
    let resp = await Employee.find({ company: id })
        .then(employees => {
            console.log(employees);
            return employees;
        })
        .catch(err => {
            console.log('Error finding posts', err);
        });
    return resp;
}
      
module.exports ={
    createEmployee,
    getEmployeeById,
    updateEmployeeById,
    deleteEmployeeById,
    getAllEmployees,
    getEmployeesOfCom
}