const Employee = require('../models/employee');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'privatekey'; 

async function login(req, res) {
    const { firstName, lastName } = req.body;
    console.log(req.body);
    // firstName is the username
    // lastName is the password
    try{
        const user = await Employee.findOne({ firstName}); // need await
        console.log(user.firstName);
        if(!user || user.lastName !== lastName){
            res.status(401).json({ message: "User not found!" });
            return;
        }
        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '24h' });
        console.log(user._id);
        res.json({ token });
    }
    catch(err){
        res.status(500).json({ message: err.message });
    }
}
module.exports = {
    login
};