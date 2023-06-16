const User = require('../models/user');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getOneUser = async (req, res) => {
  try {
    const user = await User.findById(req.params?.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    if (!user.username || !user.email || !user.password) {
      return res.status(400).json({ message: 'Please provide all fields' });
    }
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const updateUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params?.id, req.body);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params?.id);
    res.status(200).json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser
};
