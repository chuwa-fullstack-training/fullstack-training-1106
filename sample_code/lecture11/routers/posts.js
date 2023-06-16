const express = require('express');
const {
  getAllPostsByUser,
  getPostByUser,
  createPost
} = require('../controllers/post');
const auth = require('../middlewares/auth');
const router = express.Router();

router.get('/', auth, getAllPostsByUser);
router.get('/:id', auth, getPostByUser);
router.post('/', auth, createPost);

module.exports = router;
