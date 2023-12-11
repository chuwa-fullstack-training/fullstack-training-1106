const express = require('express');
const companyRouter = require('./routers/companies');
const employeeRouter = require('./routers/employees');
const userRouter = require('./routers/users');
const authRouter = require('./routers/auth');
const errorHandlerMiddleware = require('./middlewares/errorHandler');
const connectDB = require('./db');
const app = express();
const port = 3000;

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/auth', authRouter);
app.use('/api', companyRouter);
app.use('/api', employeeRouter);
app.use('/api', userRouter);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.statusCode = 404;
  next(err);
});

app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
