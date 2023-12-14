const express = require('express');
const myRouter = require('./routers');
const connectDB = require('./db');
const app = express();
const port = 4000;

connectDB();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', myRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
