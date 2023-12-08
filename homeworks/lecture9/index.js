const express = require('express');
const companyRouter = require('./routers/companyRouter');
const employeeRouter = require('./routers/employeeRouter');
const connectDB = require('./db/mongodb-connect');
const app = express();
const port = 3000;

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', companyRouter);
app.use('/api', employeeRouter);

app.listen(port, () => console.log(`app is listening on ${port}`));