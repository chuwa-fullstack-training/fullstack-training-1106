const mongoose = require('./connect');
const { Post, User } = require('./schema');

/**
 * Create a new post
 */
const user = new User({
  firstName: 'Hope',
  lastName: 'Work',
  email: 'test@abc.com'
});

let post;

user
  .save()
  .then(() => {
    console.log('User saved');
    post = new Post({
      title: 'another',
      content: 'this is test content',
      authorId: user._id
    });

    return post.save();
  })
  .then(() => {
    // !!!
    user.posts.push(post);
    return user.save();
  })
  .then(() => {
    console.log('Post saved');
  })
  .catch(err => {
    console.log('Error', err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
