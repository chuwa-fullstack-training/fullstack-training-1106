const mongoose = require('mongoose');
require('dotenv').config();

const User = require('.schemas').User;
const Post = require('.schemas').Post;

mongoose
    .connect(process.env.MONGO_URI, { 
        useNewUrlParser: true,
        useUnifiedTopology: true
     })
    .then(() => {
        console.log('Connected to Mongo DB.');
    })
    .catch(err => {
        console.log('Error connecting to Mongo DB.');
    });

const employee = new Employee({
    firstName: 'Jason',
    lastName: 'Smiff',
    jobTitle: 'Software Engineer II'
});

employee.save()
    .then(console.log('Employee saved.'))
    .catch(err => console.log('Error saving employee: ', err));

const company = new Company({
    name: 'Acme, Inc.',
    description: 'A company that makes everything.'
});

company.save()
    .then(console.log('Company saved.'))
    .catch(err => console.log('Error saving company: ', err));
