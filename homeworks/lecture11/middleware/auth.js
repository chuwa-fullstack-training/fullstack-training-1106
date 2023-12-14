const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    const token = 
        req.header('x-auth-token') || 
        req.headers?.authorization?.match(/^Bearer (.+)/)[1];
    
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        // Verify token
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
    
        // Add user from payload
        req.user = decoded.user;
    
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
}