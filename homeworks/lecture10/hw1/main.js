const express = require("express");
require('dotenv').config();
const connectDB = require("./db/connectDB.js");
const employeeRouter = require("./routers/employees.js");
const companyRouter = require("./routers/companies.js");
const PORT = 3000;
const app = express();

connectDB();

// In this hw, the passed in params should be like:
// /companies/657ab9208590a702266c9d60
app.use(express.json());

app.use('/employees', employeeRouter);
app.use('/companies', companyRouter);

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.statusCode = 404;
    next(err);
});

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});