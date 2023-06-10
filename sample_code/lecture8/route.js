const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const userRouter = require('./routers/user');
const postRouter = require('./routers/post');

app.use('/api', userRouter);
app.use('/api', postRouter);

// app.use(express.static('public'));

// app.get('/home/:name', (req, res, next) => {
//   console.log('query', req.query);
//   console.log('params', req.params);
//   res.send(`this is ${req.params.name} page`);
//   //   next();
// });

// // app.get('/home', (req, res, next) => {
// //   console.log('this is the second middleware');
// //   //   res.send('another page');
// // });

// app.get('/home-another.html', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'another.html'));
// });

// app.get('*', (req, res) => {
//   res.send('this is the default page');
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
