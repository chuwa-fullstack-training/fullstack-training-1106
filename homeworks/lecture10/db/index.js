const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/lecture10', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    }catch(err){
        console.log('Error connecting to MongoDB', err);
        process.exit(1);
    }
};

module.exports = connectDB;
