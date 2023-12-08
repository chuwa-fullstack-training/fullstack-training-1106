const mongoose = require('./connect');
const { User } = require('./schema');

/**
 * Update a user
 */
const ID = new mongoose.Types.ObjectId('64869484e94e8123a6f69849');
User.findByIdAndUpdate(ID, {
  firstName: 'Mango',
  lastName: 'Tango'
})
  .then(() => {
    console.log('User updated');
  })
  .catch(err => {
    console.log('Error updating user', err);
  })
  .finally(() => {
    mongoose.disconnect();
  });

// User.find()
//   .then(users => {
//     id = users[0]._id;
//     users[0].firstName = 'Mango';
//     users[0].lastName = 'Tango';
//     return users[0].save();
//   })
//   .then(() => {
//     console.log('User updated');
//   })
//   .catch(err => {
//     console.log('Error updating user', err);
//   })
//   .finally(() => {
//     mongoose.disconnect();
//   });
