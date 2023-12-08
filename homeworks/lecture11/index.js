const express = require('express');
const companiesRouter = require('./routers/companies');
const employeesRouter = require('./routers/employees');
const authRouter = require('./routers/auth');

const connectDB = require('./db');
const app = express();
const port = 3000;

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/auth', authRouter);
app.use('/api', companiesRouter);
app.use('/api', employeesRouter);

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.statusCode = 404;
    next(err);
    });

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
    });