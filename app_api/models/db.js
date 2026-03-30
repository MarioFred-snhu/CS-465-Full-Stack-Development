const mongoose = require('mongoose');

const dbURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/travlr';

mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', (err) => {
  console.log(`Mongoose connection error: ${err}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

const gracefulShutdown = async (msg) => {
  await mongoose.connection.close();
  console.log(`Mongoose disconnected through ${msg}`);
};

process.once('SIGUSR2', async () => {
  await gracefulShutdown('nodemon restart');
  process.kill(process.pid, 'SIGUSR2');
});

process.on('SIGINT', async () => {
  await gracefulShutdown('app termination');
  process.exit(0);
});

process.on('SIGTERM', async () => {
  await gracefulShutdown('app termination');
  process.exit(0);
});

module.exports = mongoose;