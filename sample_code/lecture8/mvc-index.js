const express = require('express');
const app = express();
const port = 3000;

const userController = require('./controller');

// Set up view engine
app.set('view engine', 'pug');
app.set('views', './views');

// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/users', userController.getAllUsers);
app.get('/users/:id', userController.getUserById);
app.post('/users', userController.createUser);

app.get('/', (req, res) => {
    res.render('mvc');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
