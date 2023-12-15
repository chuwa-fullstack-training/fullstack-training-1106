const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/lecture9', {
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