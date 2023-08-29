const mongoose = require('mongoose');
require('dotenv').config();

const User = require('./schema').User;
const Post = require('./schema').Post;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.log('Error connecting to MongoDB', err);
  });

/**
 * Create a new user
 */
const user = new User({
  firstName: 'Aaron',
  lastName: 'Zhang',
  email: 'test@gmail.com'
});

user
  .save()
  .then(() => {
    console.log('User saved');
  })
  .catch(err => {
    console.log('Error saving user', err);
  });

/**
 * Find a user
 */

/**
 * Create a new post
 */
const post = new Post({
  title: 'My first post',
  content: 'This is my first post',
  authorId: user._id
});

post
  .save()
  .then(() => {
    console.log('Post saved');
  })
  .catch(err => {
    console.log('Error saving post', err);
  });
