const express = require('express');
const router = express.Router();
const userController = require('../controller');

// /api/users
router.get('/users', userController.getAllUsers);

// /api/users/:id
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);

module.exports = router;