const users = require('./model');

module.exports = {
  getAllUsers: (req, res) => {
    res.json(users);
  },
  getUserById: (req, res) => {
    res.json(users.find(user => user.id === parseInt(req.params.id)));
  },
  createUser: (req, res) => {
    const { name, email } = req.body;
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    res.send('User created successfully');
  }
};
