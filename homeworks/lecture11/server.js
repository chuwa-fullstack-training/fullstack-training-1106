const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const { authenticateToken } = require('./middleware');
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

// Define schemas
const EmployeeSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  startDate: Date,
  jobTitle: String,
  resigned: Boolean,
  salary: Number,
  manager: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
});

const CompanySchema = new mongoose.Schema({
  name: String,
  description: String,
  headquarters: String,
  industry: String,
  employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }],
});

CompanySchema.pre('findOne', function (next) {
  this.populate('employees');
  next();
});
// Create models
const Employee = mongoose.model('Employee', EmployeeSchema);
const Company = mongoose.model('Company', CompanySchema);

app.use(bodyParser.json());

// Define routes

// ... [previous code]

// User Login API
app.post('/api/login', async (req, res) => {
  const { firstName, lastName } = req.body;

  try {
      // Ensure case-insensitive matching for firstName and lastName
      const user = await Employee.findOne({ 
          firstName: { $regex: new RegExp("^" + firstName + "$", "i") },
          lastName: { $regex: new RegExp("^" + lastName + "$", "i") }
      });

      if (user) {
          // Include both userId and company in the JWT token
          const token = jwt.sign({ 
              userId: user._id,
              company: user.company // Assuming 'company' field exists in your Employee model
          }, 'your_jwt_secret', { expiresIn: '1h' });

          res.json({ token });
      } else {
          res.status(401).send('Invalid credentials');
      }
  } catch (error) {
      console.error('Login error:', error);
      res.status(500).send('Error during authentication');
  }
});





// Create a new company
app.post('/companies', async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.json(company);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new employee
app.post('/employees',authenticateToken, async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    employee.company.employees.add(employee);
    res.json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a company by id
app.get('/companies/:companyId', authenticateToken, async (req, res) => {
  try {
    const company = await Company.findById(req.params.companyId).populate('employees');
    res.json(company);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get an employee by id
app.get('/employees/:employeeId', authenticateToken, async (req, res) => {
  try {
    const { employeeId } = req.params;
    const employee = await Employee.findById(req.params.employeeId).populate('manager');
    if (employee) {
        res.json(employee);
    } else {
        res.status(404).send('Employee not found');
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a company by id
app.put('/companies/:companyId', async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.companyId, req.body, { new: true });
    res.json(company);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update an employee by id
app.put('/employees/:employeeId', async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.employeeId, req.body, { new: true });
    res.json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a company by id
app.delete('/companies/:companyId', async (req, res) => {
  try {
    await Company.findByIdAndDelete(req.params.companyId);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete an employee by id
app.delete('/employees/:employeeId', async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.employeeId);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all companies
app.get('/companies', async (req, res) => {
  try {
    console.log("Fetching companies...");
    const companies = await Company.find().populate('employees');
    console.log("Fetched companies:", companies);
    res.json(companies);
  } catch (error) {
    console.error("Error fetching companies:", error);
    res.status(500).json({ error: error.message });
  }
});

app.get('/companies/:companyId/employees', authenticateToken, async (req, res) => {
  try {
      const requestingUserCompanyId = req.user.company;

      if (req.params.companyId === requestingUserCompanyId) {
          const employees = await Employee.find({ company: req.params.companyId });
          res.json(employees);
      } else {
          res.status(403).send('Access denied');
      }
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});



// Get all employees
app.get('/employees', async (req, res) => {
  try {
      if (req.headers.authorization) {
          // User is logged in
          authenticateToken(req, res, async () => {
              const employees = await Employee.find().populate('company');
              res.json(employees);
          });
      } else {
          // User is not logged in, send limited data
          const employees = await Employee.find().select('firstName lastName -_id');
          res.json(employees);
      }
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});


// Get all employees of a company
app.get('/employees', async (req, res) => {
  try {
      if (req.headers.authorization) {
          // User is logged in
          authenticateToken(req, res, async () => {
              const employees = await Employee.find().populate('company');
              res.json(employees);
          });
      } else {
          // User is not logged in, send limited data
          const employees = await Employee.find().select('firstName lastName -_id');
          res.json(employees);
      }
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
