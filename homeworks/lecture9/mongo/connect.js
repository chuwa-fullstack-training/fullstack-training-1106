const mongoose = require('mongoose');
require('dotenv').config();

/* const db = mongoose.connection;
db.on('connecting', () => console.log('Connecting to MongoDB...'));
db.on('error', error => console.error('Error in MongoDb connection: ' + error));
db.once('open', () => console.log('MongoDB connection opened!'));
db.on('reconnected', () => console.log('MongoDB reconnected!'));
mongoose.set('debug', true); */
async function connect() {
  try {
    //console.log(process.env.MONGODB_URI);
    await mongoose
      .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000
      });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.log('Error connecting to MongoDB', err);
  }
  return mongoose;
}

module.exports = connect;