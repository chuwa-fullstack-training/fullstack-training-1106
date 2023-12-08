const Employee = require('../models/Employee');
const Company = require('../models/Company');



const getAllEmployees = async (req, res) => {
    try {    
        const fieldsToReturn = ['firstName', 'lastName'];
        const query = req.user? Employee.find() : Employee.find().select(fieldsToReturn.join(' '));
        const employees = await query.exec();
        res.status(200).json(employees);
  
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getOneEmployee = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params?.id);
        res.status(200).json(employee);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
}

const getEmployeesByCompany = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: 'Authentication required' });
        }
        const company = await Company.findById(req.params?.id);
        if (req.user.company.toString() !== company._id.toString()) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const employees = await Employee.find({ companyId: company._id });
        res.status(200).json(employees);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
}

const createEmployee = async (req, res) => {
    try {
        const employee = new Employee(req.body);
        await employee.save();
        const company = await Company.findById(employee.companyId);
        company._employees.push(employee);
        await company.save();
        res.status(201).json({ message: 'Employee created' });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const updateEmployee = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params?.id);
        employee.firstName = req.body.firstName ?? employee.firstName;
        employee.lastName = req.body.lastName ?? employee.lastName;
        employee.email = req.body.email ?? employee.email;
        employee.company = req.body.company ?? employee.company;
        await employee.save();
        res.json(employee);
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
}

const deleteEmployee = async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params?.id);
        res.status(204).json({ message: 'Employee deleted' });
    } catch (err) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    getAllEmployees,
    getOneEmployee,
    getEmployeesByCompany,
    createEmployee,
    updateEmployee,
    deleteEmployee
};