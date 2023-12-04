const http = require('http');
const mongoose = require('./mongo/connect');
const url = require('url');

const { Company } = require('./mongo/schema');

const sever = http.createServer(async (req, res) => {
    if ( req.methond === 'GET' && req.url === '/api/companies') {
        Company.find()
            .then((companies) => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(companies));
            })
            .catch((err) => {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Internal Server Error' }));
            });
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
}