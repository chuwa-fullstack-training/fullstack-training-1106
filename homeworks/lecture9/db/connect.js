const mongoose = require('mongoose');

const username = 'haorujiang';
const password = '970519';
const cluster = 'test';
const databaseName = 'test';

const MONGO_URL = `mongodb+srv://${username}:${password}@${cluster}.tnayfqm.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

const db = async()=>{
    try{
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to Mongodb');
    }
    catch(e){
        console.log('Error of connection to Mongodb:', err);
        process.exit(1);
    }
};

module.exports = db;