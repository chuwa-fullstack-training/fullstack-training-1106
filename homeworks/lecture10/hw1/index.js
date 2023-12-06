const express = require('express');
const companiesRouter = require('./routers/companies');
const employeesRouter = require('./routers/employees');
const connectDB = require('../db');
const app = express();
const port = 3000;

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', companiesRouter);
app.use('/api', employeesRouter);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    });