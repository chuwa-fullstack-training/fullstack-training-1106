const express = require('express');
const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/user');
const router = express.Router();

router.get('/users', getAllUsers);
router.get('/users/:id', getOneUser);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
