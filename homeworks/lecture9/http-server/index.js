const http = require('http');
const mongoose = require('mongoose');
const url = require('url');

mongoose
  .connect("mongodb://127.0.0.1:27017/lecture9", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.log('Error connecting to MongoDB', err);
  });

const { Company } = require('../mongo/schema');

const server = http.createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/api/companies') {
    try {
      const companies = await Company.find();

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(users));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
  } else if (req.method === 'POST' && req.url === '/api/companies') {
    try {
      const body = [];
      req.on('data', chunk => {
        body.push(chunk);
      });
      req.on('end', async () => {
        const parsedBody = JSON.parse(Buffer.concat(body).toString());
        const company = new Company({
            name: parsedBody.name,
            description: parsedBody.description,
            headquarters: parsedBody.headquarters,
            industry: parsedBody.industry
        });
        await company.save();
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(company));
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