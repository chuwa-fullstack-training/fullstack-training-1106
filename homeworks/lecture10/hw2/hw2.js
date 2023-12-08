// # Todo List App with Express.js

// ## Requirements

// - [ ] Design and implement a RESTful API for a todo list app using Express.
// - [ ] Use template engines to render the views.
// - [ ] Use MongoDB to store the data.
// - [ ] Design your own models and schemas.

const express = require('express');
const connectDB = require('../database/connection');
const app = express();
const routers = require('../routers/hw2router');
const PORT = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

connectDB();

app.use('/', routers);

app.use((req, res, next) => {
    res.status(404).json({message: '404 Not Found'});
})

app.listen(PORT, () => {
    console.log(`The Server is running on port ${PORT}`);
});
