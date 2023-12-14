const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('Haopeng API Test');
});

mongoose.connect('mongodb://localhost/Haopeng-database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(bodyParser.json());

const validUser = {
    username: 'firstName',
    password: 'lastName'
};

app.post('/api/login', (req, res) => {
    const { firstName, lastName } = req.body;

    if (firstName === validUser.username && lastName === validUser.password) {
        // Generate JWT token
        const token = jwt.sign({ username: firstName }, 'Your_key');
        res.status(200).json({ token });
    } else {
        res.status(401).json({ error: 'Invalid' });
    }
});


function authenticateToken(req, res, next) {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ error: 'Access denied' });

    jwt.verify(token, 'Your_key', (err, user) => {
        if (err) return res.status(403).json({ error: 'Access denied' });
        req.user = user;
        next();
    });
}


app.use(authenticateToken);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
