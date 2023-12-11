const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        const dbUri = process.env.MONGODB_URL;
        if (!dbUri) {
            throw new Error('MONGODB_URI is not defined in .env file');
        }
        await mongoose.connect(dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Database connection error:', err.message);
        process.exit(1);
    }
}

module.exports = connectDB;