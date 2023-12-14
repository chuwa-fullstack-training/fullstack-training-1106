const express = require('express');
const myRouter = require('./routers/custom');
const authRouter = require('./routers/auth');
const connectDB = require('./db');
const errorHandlerMiddleware = require('./middlewares/errorHandler');
const app = express();
const port = 4000;

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', myRouter);
app.use('/auth', authRouter);

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.statusCode = 404;
    next(err);
});
app.use(errorHandlerMiddleware);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
