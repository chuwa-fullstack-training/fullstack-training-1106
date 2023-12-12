const express = require('express');
const companyRouter = require('./routers/company');
const employeeRouter = require('./routers/employee');
const connectDB = require('./db/index');
const app = express();
const port = 3000;

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', companyRouter);
app.use('/api', employeeRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
