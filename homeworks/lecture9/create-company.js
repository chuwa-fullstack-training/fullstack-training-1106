const mongoose = require('./connect');
const { Company } = require('./schema');

/**
 * Create a new post
 */
const company = new Company({
  name: "CompanyA",
  description: "Tech",
  headquarters: "DB",
});

company
  .save()
  .then(() => {
    console.log('Company saved');
  })
  .catch(err => {
    console.log('Error', err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
