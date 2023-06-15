const express = require('express');
const userRouter = require('./routers/users');
const connectDB = require('./db');
const app = express();
const port = 3000;

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', userRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
