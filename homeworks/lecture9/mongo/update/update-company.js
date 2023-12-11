const mongoose = require('mongoose');
const { Company } = require('./mongo/schema');

User.findByIdAndUpdate(ID, {
    name: 'Microsoft',
    headquarters: 'Redmond, Washington'
})
    .then(console.log('Company updated'))
    .catch(err => console.log(err))
    .finally(() => mongoose.disconnect());