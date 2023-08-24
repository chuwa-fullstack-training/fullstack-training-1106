const express = require('express');
const app = express();
const port = 3000;

const userController = require('./controller');
const { checkAdmin } = require('./middleware/user');

// Set up view engine
app.set('view engine', 'pug');
app.set('views', './views');

// Set up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set up static files
app.use(express.static('public'));

// Set up custom middleware
app.use((req, res, next) => {
  console.log('Request URL:', req.url);
  console.log('Time:', Date.now());
  next();
});

app.get('/home.html', (req, res) => {
  res.send('Home HTML');
});

// Set up authorization middleware
app.get('/users', userController.getAllUsers);
app.get('/users/:id', userController.getUserById);

app.post('/users', checkAdmin, userController.createUser);

// how to pass variable between middleware functions
// option 1: use res.locals
app.get(
  '/example',
  (req, res, next) => {
    res.locals.message = 'Hello World';
    next();
  },
  (req, res) => {
    res.send(res.locals.message);
  }
);

// option 2: use next (NOT recommended)
app.get(
  '/example2',
  (req, res, next) => {
    next('Hello World');
  },
  (message, req, res) => {
    res.send(message);
  }
);

app.get('/', (req, res) => {
  res.render('mvc');
});

app.get('*', (req, res) => {
  res.send('404 Not Found');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
