require('./app_api/models/db');
require('./app_api/models/trips');

const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

const seedTrips = [
  {
    tripCode: 'GR01',
    name: 'Gale Reef Adventure',
    length: '5 nights',
    start: 'From $799',
    resort: 'Travlr Getaways Resort',
    perPerson: '$799',
    image: '/images/reef1.jpg',
    description: 'Snorkeling, reef tours, and beachfront relaxation.'
  },
  {
    tripCode: 'DR01',
    name: 'Dawson’s Reef Escape',
    length: '3 nights',
    start: 'From $549',
    resort: 'Travlr Getaways Resort',
    perPerson: '$549',
    image: '/images/reef2.jpg',
    description: 'Guided diving, ocean views, and resort amenities.'
  },
  {
    tripCode: 'CR01',
    name: 'Claire’s Reef Weekend',
    length: '2 nights',
    start: 'From $399',
    resort: 'Travlr Getaways Resort',
    perPerson: '$399',
    image: '/images/reef3.jpg',
    description: 'A quick getaway with reef exploration and local dining.'
  }
];

(async () => {
  try {
    await Trip.deleteMany({});
    await Trip.insertMany(seedTrips);
    console.log('Seed complete: trips inserted into MongoDB');
  } catch (err) {
    console.error('Seed error:', err);
  } finally {
    await mongoose.connection.close();
    console.log('Mongoose disconnected');
    process.exit(0);
  }
})();