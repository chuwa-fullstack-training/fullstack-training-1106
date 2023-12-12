const express = require('express');
const companyRouter = require('./routers/company');
const employeeRouter = require('./routers/employee');
const loginRouter = require('./routers/login');
const connectDB = require('./db/index');
const app = express();
const port = 3000;

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/auth', loginRouter);
app.use('/api', companyRouter);
app.use('/api', employeeRouter);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.statusCode = 404;
  next(err);
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({ error: err.message });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
