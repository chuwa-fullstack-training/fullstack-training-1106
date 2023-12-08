const companyRoutes = require('./companies');
const employeeRoutes = require('./employees');
const express = require('express');

const constructorMethod = (app) => {
    app.use('/api', companyRoutes);
    app.use('/api', employeeRoutes);
    

    app.use('*', (req, res) => {
        res.sendStatus(404);
    });
}

module.exports = constructorMethod;

