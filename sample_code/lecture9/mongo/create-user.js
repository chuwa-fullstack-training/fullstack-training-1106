const mongoose = require('./connect');
const { User } = require('./schema');

/**
 * Create a new user
 */
const user = new User({
  firstName: 'Aaron',
  lastName: 'Zhang',
  email: 'abc@gmail.com'
});

user
  .save()
  .then(() => {
    console.log('User saved');
  })
  .catch(err => {
    console.log('Error saving user', err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
