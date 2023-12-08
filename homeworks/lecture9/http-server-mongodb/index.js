const http = require('http');
const mongoose = require('mongoose');
const url = require('url');
require('dotenv').config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.log('Error connecting to MongoDB', err);
  });

const { User } = require('../mongo/schema');

const server = http.createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/api/getAllUsers') {
    try {
      const users = await User.find();

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(users));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
  } else if (req.method === 'POST' && req.url === '/api/createUser') {
    try {
      const body = [];
      req.on('data', chunk => {
        body.push(chunk);
      });
      req.on('end', async () => {
        const parsedBody = JSON.parse(Buffer.concat(body).toString());
        const user = new User({
          firstName: parsedBody.firstName,
          lastName: parsedBody.lastName,
          email: parsedBody.email
        });
        await user.save();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(user));
      });
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

server.listen(3000, () => console.log('Server is listening on port 3000'));
