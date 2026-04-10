require('./app_api/models/db');
require('./app_api/models/trips');

const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Trip = mongoose.model('Trip');

const tripsPath = path.join(__dirname, 'data', 'trips.json');
const seedTrips = JSON.parse(fs.readFileSync(tripsPath, 'utf8'));

async function seedDB() {
  try {
    await Trip.deleteMany({});
    await Trip.insertMany(seedTrips);
    console.log('Seed complete: trips inserted into MongoDB from trips.json');
  } catch (err) {
    console.error('Seed error:', err);
  } finally {
    mongoose.connection.close();
  }
}

seedDB();