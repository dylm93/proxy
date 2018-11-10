const mongoose = require ('mongoose');
mongoose.connect('mongodb://mongo:27017/songs');

 const connection = mongoose.connection;
 

 connection.on('error', console.error.bind(console, 'connection error'))
connection.once('open', () => console.log('connected to mongodb'))

 module.exports = connection; 