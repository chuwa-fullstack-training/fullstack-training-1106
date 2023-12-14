const { Employee, Company } = require('../db/schema');

const getAllEmployees = async (req, res) => {
    const employees = await Employee.find()
        .catch(err => res.status(500).json({message: 'Error finding all Employees', err}));
    res.status(200).json(employees);
}

const getEmployee = async (req, res) => {
    const employee = await Employee.findById(req.params?.id)
        .catch(err => res.status(500).json({message: 'Error finding all Employees', err}));
    res.status(200).json(employee);
}

const createEmployee = async (req, res) => {
    const foundCompany = await Company.findById(req.body?.company).catch(err => res.status(500).json(`Company with id: ${infos.company} not found`));
    const employee = new Employee(req.body);
    let employee_id;
    await employee.save().then(async savedEmployee => {
        employee_id = savedEmployee._id;
        foundCompany._employees.push(savedEmployee._id);
        await foundCompany.save();
        console.log('Employee created and associated with the company successfully.');
        res.status(201).json(savedEmployee);
    }).catch(err => res.status(500).json({message: 'Error saving employee', err}));
}

const updateEmployee = async (req, res) => {
    const employee = await Employee.findByIdAndUpdate(req.params?.id, req.body).then(updatedEmployee => {
        console.log('Employee Updated');
        res.status(200).json(updatedEmployee);
    }).catch(err => res.status(500).json({message: 'Error updating employee', err}));
}

const deleteEmployee = async (req, res) => {
    await Employee.findByIdAndDelete(req.params?.id).then(() => {
        console.log('Employee deleted');
        res.status(200).json({ message: 'Employee deleted' });
    }).catch(err => res.status(500).json({message: 'Error deleting employee', err}));
}

module.exports = {
    getAllEmployees,
    getEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
}