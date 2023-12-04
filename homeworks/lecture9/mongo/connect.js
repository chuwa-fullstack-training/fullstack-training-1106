const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/lecture9', {
     useNewUrlParser: true,
     useUnifiedTopology: true
     })
     .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log('Error connecting to MongoDB', err);
    });

mondule.exports = mongoose;