const Post = require('../models/Post');
const User = require('../models/user');

const getAllPostsByUser = async (req, res) => {
  try {
    const posts = await Post.find({ authorId: req.user.id });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const getPostByUser = async (req, res) => {
  try {
    const post = await Post.findOne({
      authorId: req.user.id,
      _id: req.params?.id
    });
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const createPost = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');

    const post = new Post({
      title: req.body.title,
      content: req.body.content,
      authorId: user.id
    });

    await post.save();
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getAllPostsByUser,
  getPostByUser,
  createPost
};
