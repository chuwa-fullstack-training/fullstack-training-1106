
const express = require('express');
const app = express();

const companyR = require('./routes/companies');
const employeeR = require('./routes/employees');
const authR = require('./routes/auth'); //auth
const errorHandlerMiddleware = require("./middlewares/errorHandler");

const connectDB = require('./connect');
const PORT = 8000;

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/auth', authR);
app.use('/api', companyR);
app.use('/api', employeeR);

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.statusCode = 404;
    next(err);
  });
  
app.use(errorHandlerMiddleware);

app.listen(PORT);