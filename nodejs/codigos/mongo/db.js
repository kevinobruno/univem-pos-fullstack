const mongoose = require('mongoose');

var uri = 'mongodb+srv://admin:nodeclass2022.@cluster0.39gwnur.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', () => console.log('MongoDB database connection established successfully'));

module.exports = mongoose;
