const companyRoutes = require('./companies');
const employeeRoutes = require('./employees');
const authRoutes = require('./auth');
const express = require('express');

const constructorMethod = (app) => {
    app.use('/api', companyRoutes);
    app.use('/api', employeeRoutes);
    app.use('/api', authRoutes);
    

    app.use('*', (req, res) => {
        res.sendStatus(404);
    });
}

module.exports = constructorMethod;

