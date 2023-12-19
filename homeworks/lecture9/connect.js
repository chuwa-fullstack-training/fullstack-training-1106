const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();
const connectDB = async() => {
    try{
        const mongodbUri = process.env.MONGODB_URI.replace(
            '${MONGODB_PASSWORD}',
            process.env.MONGODB_PASSWORD
        );
        await mongoose.connect(mongodbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");

    }catch(e){
        console.error("Error connecting to MongoDB", e);
        process.exit(1);
    }
}


// mongoose
//     .connect(mongodbUri, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
//     .then( ()=>{
//         console.log("Connected to MongoDB");
//     })
//     .catch(e => {
//         console.error("Error connecting to MongoDB", e);
//         process.exit(5);
//     });

module.exports = connectDB;