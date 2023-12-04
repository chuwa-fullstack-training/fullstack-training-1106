const mongoose = require('mongoose');
const { Company } = require('./schema');

const company = new Company({
    name: 'Google',
    description: 'Search Engine',
    headquarters: 'Mountain View, CA',
    industry: 'Technology',

    });

    company
        .save()
        .then(()=>{
            console.log('Company saved');
        })
        .catch((err) => {
            console.log('Error saving company', err);
        })
        .finally(() => {
            mongoose.disconnect();
        });
