require('dotenv/config');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', () => console.log('MongoDB database connection established successfully'));

module.exports = mongoose;
