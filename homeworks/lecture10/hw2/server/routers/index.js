const todoRoutes = require('./todos');
const express = require('express');

const constructorMethod = (app) => {
    app.use('/api', todoRoutes);    

    app.use('*', (req, res) => {
        res.sendStatus(404);
    });
}

module.exports = constructorMethod;

