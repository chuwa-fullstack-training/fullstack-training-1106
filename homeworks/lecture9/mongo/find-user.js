const mongoose = require('./connect');
const { User } = require('./schema');

/**
 * Read a user by id
 */
const ID = new mongoose.Types.ObjectId('6486a9b106afb4da78790e9a');
User.findById(ID)
  .then(user => {
    console.log(user);
  })
  .catch(err => {
    console.log('Error finding user', err);
  })
  .finally(() => {
    mongoose.disconnect();
  });
