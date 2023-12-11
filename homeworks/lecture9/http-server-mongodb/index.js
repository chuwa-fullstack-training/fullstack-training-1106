const http = require('http');
const mongoose = require('mongoose');
const url = require('url');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log("Error connecting to MongoDB", err));

const { Employee } = require('./mongo/schema');
const { Company } = require('./mongo/schema');

const server = http.createServer(async (req, res) => {
    if (req.method === 'GET' && req.url === '/api/getAllEmployees') {
        try {
            const employees = await Employee.find();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(employees));
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal Server Error' }));
        }
    } else if (req.method === 'POST' && req.url === '/api/createEmployee') {
        try {
            const body = [];
            req.on('data', chunk => {
                body.push(chunk);
            });
            req.on('end', async () => {
                const parsedBody = JSON.parse(Buffer.concat(body).toString());
                const employee = new Employee({
                    firstName: parsedBody.firstName,
                    lastName: parsedBody.lastName,
                    jobTitle: parsedBody.jobTitle
                });
                await employee.save();
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(employee));
            })
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal Server Error' }));
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Route not found' })); 
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});