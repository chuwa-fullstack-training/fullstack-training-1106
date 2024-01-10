const express = require('express');
const {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/user');
const router = express.Router();

// /api/users
router.get('/users', getAllUsers);

router.get('/users/:id', getOneUser);

// router.get('/users/:id/cart', getShoppingCart);
// router.get('/users/:id/orders/:id', getOrderInformation);

router.post('/users', createUser);

router.put('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

module.exports = router;
