const express = require('express');
const app = express();
const db = require('./db/connect');
const port = 3000;

db();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const companyRouter = require('./routers/companyRouter');
const employeeRouter = require('./routers/employeeRouter');
app.use('/api', companyRouter);
app.use('/api', employeeRouter);

app.listen(port, ()=>console.log(`app is running on ${port}`));