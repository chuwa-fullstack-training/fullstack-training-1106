const express = require('express');

const hw1Router = require('./hw1');
const hw2Router = require('./hw2');
const hw3Router = require('./hw3');

const app = express();
const PORT = 3000;

app.use('/hw1', hw1Router.router1);
app.use('/api', hw1Router.router2);

app.use('/hw2', hw2Router);

// app.use('/api', hw3Router);

app.use((req, res, next) => {
    res.status(404).send('Can\'t find corresponding endpoint, please check.')
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));