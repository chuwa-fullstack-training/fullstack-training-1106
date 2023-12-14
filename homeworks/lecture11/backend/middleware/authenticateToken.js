const jwt = require('jsonwebtoken');

const JWT_SECRET = 'privatekey'; 

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; 

    if (token == null) {
        // return res.sendStatus(401);
        next();
        return;
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(403); 
        }
        req.user = user;
        next();
    });
};

module.exports = authenticateToken;
