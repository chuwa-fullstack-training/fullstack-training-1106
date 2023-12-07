const express = require('express');
const app = express();
const routers = require('./routers/index');
const connectDB = require('./database/connection');
const PORT = 3000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routers);

app.use((req, res, next) => {
    res.status(404).send('404 Not Found')
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})