const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());

const jwt = require('jsonwebtoken');


app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
const {Company, Employee, User} = require('./schema.js');
const authenticateJWT = require('./middleware/authenticateJWT');

const uri = "mongodb://localhost:27017/CompanyManagement"; // MongoDB URI
mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));
app.get('/', authenticateJWT, (req, res) => {
    if (!req.isAuthenticated) {
        res.redirect('/login.html');
    } else {
        res.redirect('/manage.html');
    }
});

app.post('/api/login', async (req, res) => {
    try {
        const {username, pwd} = req.body;
        const user = await User.findOne({userName: username});

        if (!user) {
            return res.status(404).json({message: 'User not found.'});
        }
        const passwordIsValid = bcrypt.compareSync(pwd,user.password);
        if (!passwordIsValid) {
            return res.status(401).json({message: 'Invalid password.'});
        }
        const token = jwt.sign({ username: user.userName }, "SecretKey", { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });
        res.status(200).json({message: 'Login successful.'});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: 'Error on the server.', error: err});
    }
});

app.get('/api/verifyToken', authenticateJWT, (req, res) => {
    if (req.isAuthenticated) {
        res.status(200).send({ message: 'Token is valid' });
    } else {
        res.status(401).send({ message: 'Token is invalid or expired' });
    }
});
app.post('/companies', async (req, res) => {
    try {
        const company = new Company(req.body);
        company.save();
        res.status(201).send(company);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post('/api/signup', async (req, res) => {
    try {
        const {userName, password, company} = req.body;
        // Optional: Add validation for username and password
        const newUser = new User({userName, password, company});
        console.log(newUser);
        await newUser.save();

        res.status(201).json({message: 'User successfully registered'});
    } catch (error) {
        if (error.code === 11000) {
            // Duplicate username
            return res.status(400).json({message: 'Username already exists'});
        }
        res.status(500).json({message: 'Error registering new user'});
    }
});

app.post('/employees', async (req, res) => {
    try {
        const employee = new Employee(req.body);
        employee.save();
        res.status(201).send(employee);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/companies/company/:id', async (req, res) => {
    try {
        const company = await Company.findById(req.params.id);
        if (!company) {
            return res.status(404).send('Company not found');
        }
        res.send(company);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/companies/employee/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).send('Employee not found');
        }
        res.send(employee);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.put('/companies/company/:id', async (req, res) => {
    const companyId = req.params.id;
    const updates = req.body;

    try {
        const company = await Company.findByIdAndUpdate(companyId, updates, {new: true});
        if (!company) {
            return res.status(404).send('Company not found');
        }
        res.send(company);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.put('/companies/employee/:id', async (req, res) => {
    const employeeId = req.params.id;
    const updates = req.body;

    try {
        const employee = await Employee.findByIdAndUpdate(employeeId, updates, {new: true});
        if (!employee) {
            return res.status(404).send('Employee not found');
        }
        res.send(employee);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.delete('/companies/company/:id', async (req, res) => {
    try {
        const company = await Company.findByIdAndDelete(req.params.id);
        if (!company) {
            return res.status(404).send('Company not found');
        }
        res.send({message: 'Company deleted successfully'});
    } catch (error) {
        res.status(500).send(error);
    }
});

app.delete('/companies/employee/:id', async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if (!employee) {
            return res.status(404).send('Employee not found');
        }
        res.send({message: 'Employee deleted successfully'});
    } catch (error) {
        res.status(500).send(error);
    }
});
app.get('/companies/company', async (req, res) => {
    try {
        const companies = await Company.find({});
        res.send(companies);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/companies/employee', authenticateJWT, async (req, res) => {
    try {
        if (req.isAuthenticated) {
            // 使用token中的用户名查找用户所在的公司
            const user = await User.findOne({ userName : req.user.username });
            if (!user) {
                return res.status(404).send('User not found');
            }

            // 查找该公司的所有员工
            const company = await Company.findOne({ name: user.company });
            const employees = await Employee.find({company : company._id });
            res.send(employees);
        }else{
            // 如果用户未验证，只发送每个员工的 firstname 和 lastname
            const employees = await Employee.find({});
            const limitedData = employees.map(emp => ({
                firstName: emp.firstName,
                lastName: emp.lastName
            }));
            res.send(limitedData);
        }
    } catch (error) {
        res.status(500).send(error);
    }
});
app.get('/companies/:id/employees', async (req, res) => {
    try {
        const companyId = req.params.id;
        const employees = await Employee.find({company: companyId});
        console.log(employees);
        res.send(employees);
    } catch (error) {
        res.status(500).send(error);
    }
});
app.listen(3000, () => {
    console.log('Server is up on port 3000');
});