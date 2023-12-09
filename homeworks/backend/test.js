const mongoose = require('./db/connect');
const { Company } = require('./models/Company');

/**
 * Create a new user
 */
const company = new Company({
  firstName: 'Aaron',
  lastName: 'Zhang',
  email: 'abc@gmail.com'
});

company
  .save()
  .then(() => {
    console.log('Company saved');
  })
  .catch(err => {
    console.log('Error saving user', err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
