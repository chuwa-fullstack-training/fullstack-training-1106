const express = require('express');
const app = express();

const companyR = require('./routes/companies');
const employeeR = require('./routes/employees');
const connectDB = require('./connect');

const PORT = 8000;

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', companyR);
app.use('/api', employeeR);

app.listen(PORT);