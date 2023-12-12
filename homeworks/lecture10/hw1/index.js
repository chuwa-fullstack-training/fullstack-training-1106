const express = require('express');
const companyRouter = require('./routers/companyRouter');
const employeeRouter = require('./routers/employeeRouter');
const connectDB = require('./db');
const app = express();
const port = 3000;

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/company', companyRouter);

app.use('/employee', employeeRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
