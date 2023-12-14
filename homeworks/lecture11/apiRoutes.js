const express = require('express');
const router = express.Router();
const Company = require('./Company');
const Employee = require('./Employee');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'my_jwt_secret'; 

const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Bearer <token>

    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

// Define API routes here
// Create a new company
router.post('/company', async (req, res) => {
  try {
    const newCompany = new Company(req.body);
    const savedCompany = await newCompany.save();
    res.status(201).json(savedCompany);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Create a New Employee
router.post('/employee', async (req, res) => {
    try {
        const newEmployee = new Employee(req.body);
        const savedEmployee = await newEmployee.save();
        res.status(201).json(savedEmployee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a Company by ID
router.get('/company/:id', async (req, res) => {
    try {
        const company = await Company.findById(req.params.id).populate('employees');
        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.json(company);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// // Get an Employee by ID
// router.get('/employee/:id', async (req, res) => {
//     try {
//         const employee = await Employee.findById(req.params.id).populate('company').populate('manager');
//         if (!employee) {
//             return res.status(404).json({ message: 'Employee not found' });
//         }
//         res.json(employee);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// get employee details
router.get('/employees/:id', authenticate, async (req, res) => {
    try {
        const employeeId = req.params.id;
        const employee = await Employee.findById(employeeId).populate('company');

        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        // Check if the user is authenticated
        if (req.user) {
            // console.log(employee.company._id.toString());
            // console.log(req.user.companyId);
            // If the user is authenticated, check if they belong to the same company
            if (employee.company._id.toString() === req.user.companyId) {
                // If they belong to the same company, return all fields
                return res.json(employee);
            } else {
                // If they do not belong to the same company, return restricted data
                return res.json({
                    firstName: employee.firstName,
                    lastName: employee.lastName
                });
            }
        } else {
            // If the user is not authenticated, return only firstName and lastName
            return res.json({
                firstName: employee.firstName,
                lastName: employee.lastName
            });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Update a Company by ID
router.put('/company/:id', async (req, res) => {
    try {
        const updatedCompany = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCompany) {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.json(updatedCompany);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update an Employee by ID
router.put('/employee/:id', async (req, res) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json(updatedEmployee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete a Company by ID
router.delete('/company/:id', async (req, res) => {
    try {
        const deletedCompany = await Company.findByIdAndDelete(req.params.id);
        if (!deletedCompany) {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.json({ message: 'Company deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Delete an Employee by ID
router.delete('/employee/:id', async (req, res) => {
    try {
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
        if (!deletedEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json({ message: 'Employee deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get All Companies
router.get('/companies', async (req, res) => {
    try {
        const companies = await Company.find({});
        res.json(companies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get All Employees
router.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.find({}).populate('company').populate('manager');
        res.json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get All Employees of a Company
router.get('/company/:id/employees', async (req, res) => {
    try {
        const company = await Company.findById(req.params.id).populate('employees');
        if (!company) {
            return res.status(404).json({ message: 'Company not found' });
        }
        res.json(company.employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Login API
router.post('/api/login', async (req, res) => {
    const { firstName, lastName } = req.body;

    try {
        // Find the user by firstName
        const user = await Employee.findOne({ firstName });

        // Check if user exists and lastName matches
        if (!user || user.lastName !== lastName) {
            return res.status(401).json({ message: 'Authentication failed' });
        }

        // Create JWT token
        const token = jwt.sign(
            { 
                userId: user._id,
                companyId: user.company?._id
             },
            JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



module.exports = router;
