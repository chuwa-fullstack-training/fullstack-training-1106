const { Employee, Company } = require('../schemas/Employee');

// Create a new employee
const createEmployee = async (req, res) => {
    try {
        const newEmployee = new Employee(req.body);
        await newEmployee.save();
        // Step 2: Find the corresponding company and add the employee's ID
        if (newEmployee.company) {
            const company = await Company.findById(newEmployee.company);
            if (company) {
                company.employees.push(newEmployee._id);
                await company.save();
            }
        }
        res.status(201).json({ message: 'Employee created' });
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: 'Server Error' });
    }
};

// Get an employee by id
const getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params?.id);
        if (!employee) return res.status(404).json({ message: 'Employee not found' });
        res.status(200).json(employee);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Update an employee by id
const updateEmployeeById = async (req, res) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEmployee) return res.status(404).json({ message: 'Employee not found' });
        res.json(updatedEmployee);
    } catch (error) {
        console.log(error.message);
        res.status(400).json({ message: 'Server Error' });
    }
};

// Delete an employee by id
const deleteEmployeeById = async (req, res) => {
    try {
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
        if (!deletedEmployee) return res.status(404).json({ message: 'Employee not found' });
        res.status(204).json({ message: 'Employee deleted' });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

// Get all employees
const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    createEmployee,
    getEmployeeById,
    updateEmployeeById,
    deleteEmployeeById,
    getAllEmployees
};