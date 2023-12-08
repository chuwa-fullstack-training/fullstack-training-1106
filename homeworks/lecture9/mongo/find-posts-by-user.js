const mongoose = require('./connect');
const { Post, User } = require('./schema');

/**
 * Read all posts by the given user id
 */
const ID = new mongoose.Types.ObjectId('6486a9b106afb4da78790e9a');
Post.find({ authorId: ID })
  .then(posts => {
    console.log(posts);
  })
  .catch(err => {
    console.log('Error finding posts', err);
  })
  .finally(() => {
    mongoose.disconnect();
  });
