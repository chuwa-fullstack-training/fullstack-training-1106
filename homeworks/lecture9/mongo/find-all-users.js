const mongoose = require('./connect');
const { User } = require('./schema');

/**
 * Read all users
 */
User.find()
  .then(users => {
    console.log(users);
  })
  .catch(err => {
    console.log('Error finding users', err);
  })
  .finally(() => {
    mongoose.disconnect();
  });
