const connect = require('./connect.js');
const { User } = require('./schema');




async function createUser() {
  const mongoose = await connect();
  /**
   * Create a new user
  */
  const user = new User({
    firstName: 'Sam',
    lastName: 'Lin',
    email: 'abc@gmail.com'
  });

}

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
