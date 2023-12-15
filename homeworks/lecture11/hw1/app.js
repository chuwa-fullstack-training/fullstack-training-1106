const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Company = require('./models/Company');
const Employee = require('./models/Employee');
const User = require('./models/User');
const app = express();
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://damonliren:7TXzVh9L5XKkzgKF@liren.pncnd7y.mongodb.net/');

// Define routes here
const auth = require('./middlewares/auth');
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

const {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
  } = require('../controllers/user');
app.get('/user/', getAllUsers);

// api/users/:id
app.get('/user/:id', getOneUser);
app.post('/user/', createUser);
app.put('/user/:id', updateUser);
app.delete('/user/:id', deleteUser);
    
app.post('/user/login', async (req, res, next) => {
    try {
      const { username, password } = req.body;
  
      let user = await User.findOne({ username });
  
      if (!user) {
        throw new CustomAPIError('Invalid Credentials', 400);
      }
  
      if (user.password !== password) {
        return res.status(400).json({ message: 'Invalid Credentials' });
      }
  
      const payload = {
        user: {
          id: user._id
        }
      };
  
      const token = await jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '30d'
      });
      res.json({ token });
    } catch (err) {
      next(err);
    }
  });
  

app.post('/api/companies', auth, async (req, res) => {
    try {
        const company = new Company(req.body);
        await company.save();
        res.status(201).json(company);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/employees', auth, async (req, res) => {
    try {
        const employee = new Employee(req.body);
        await employee.save();
        res.status(201).json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/companies/:id', async (req, res) => {
    try {
        const company = await Company.findById(req.params.id).populate('employees');
        if (!company) {
            return res.status(404).json({ error: 'Company not found' });
        }
        res.json(company);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/employees/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id).populate('company');
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/api/companies/:id', auth, async (req, res) => {
    try {
        const updatedCompany = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCompany) {
            return res.status(404).json({ error: 'Company not found' });
        }
        res.json(updatedCompany);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.put('/api/employees/:id', auth, async (req, res) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEmployee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.json(updatedEmployee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/api/companies/:id', auth, async (req, res) => {
    try {
        const deletedCompany = await Company.findByIdAndRemove(req.params.id);
        if (!deletedCompany) {
            return res.status(404).json({ error: 'Company not found' });
        }
        res.json({ message: 'Company deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/api/employees/:id', auth, async (req, res) => {
    try {
        const deletedEmployee = await Employee.findByIdAndRemove(req.params.id);
        if (!deletedEmployee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.json({ message: 'Employee deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/companies', async (req, res) => {
    try {
        const companies = await Company.find({});
        res.json(companies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/employees', async (req, res) => {
    try {
        const employees = await Employee.find({});
        res.json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/companies/:id/employees', async (req, res) => {
    try {
        const company = await Company.findById(req.params.id).populate('employees');
        if (!company) {
            return res.status(404).json({ error: 'Company not found' });
        }
        res.json(company.employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});





