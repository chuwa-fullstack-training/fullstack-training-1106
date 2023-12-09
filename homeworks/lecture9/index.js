const express = require('express');
const app = express();
const companyRouter = require('./routers/companyRouter');
const employeeRouter = require('./routers/employeeRouter');
const loginRouter = require('./routers/loginRouter');
const db = require('./db/connect');
const port = 3000;
const errorHandlerMiddleware = require('./middlewares/errorHandler');

db();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api', companyRouter);
app.use('/api', employeeRouter);
app.use('/api', loginRouter);

app.use((req,res,next)=>{
    const err = new Error('Not Found');
    err.statusCode = 404;
    next(err);
});

app.use(errorHandlerMiddleware);

app.listen(port, ()=>console.log(`app is running on ${port}`));