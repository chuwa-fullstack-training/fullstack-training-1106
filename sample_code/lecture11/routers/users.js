const express = require('express');
const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/user');

const router = express.Router();

// api/users
router.get('/', getAllUsers);

// api/users/:id
router.get('/:id', getOneUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
