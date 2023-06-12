const mongoose = require('./connect');
const { User } = require('./schema');

/**
 * Delete a user
 */
const ID = new mongoose.Types.ObjectId('64869cf586c278fdd5576e8a');
User.findByIdAndDelete(ID)
  .then(res => {
    console.log('User deleted', res);
  })
  .catch(err => {
    console.log('Error deleting user', err);
  })
  .finally(() => {
    mongoose.disconnect();
  });

// User.findByIdAndRemove(ID)
//   .then(user => {
//     console.log(`User ${user} deleted`);
//   })
//   .catch(err => {
//     console.log('Error deleting user', err);
//   })
//   .finally(() => {
//     mongoose.disconnect();
//   });

// User.deleteOne({ firstName: 'Aaron' })
//   .then((res) => {
//     console.log('User deleted', res);
//   })
//   .catch(err => {
//     console.log('Error deleting user', err);
//   })
//   .finally(() => {
//     mongoose.disconnect();
//   });
