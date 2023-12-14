const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('Haopeng API Test');
});

mongoose.connect('mongodb://localhost/Haopeng-database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(bodyParser.json());


const companyRoutes = require('./companyRoutes');
const employeeRoutes = require('./employeeRoutes');


app.use('/companies', companyRoutes);
app.use('/employees', employeeRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
