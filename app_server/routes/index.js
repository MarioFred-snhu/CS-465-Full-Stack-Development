const express = require('express');
const router = express.Router();

const ctrlTravlr = require('../controllers/travlr');
const ctrlTrips = require('../controllers/trips');

router.get('/', ctrlTravlr.home);

// travel list (all trips)
router.get('/travel', ctrlTrips.tripsList);

// 🔥 ADD THIS (REQUIRED for your grade)
router.get('/travel/:tripCode', ctrlTrips.tripsFindByCode);

router.get('/rooms', ctrlTravlr.rooms);
router.get('/meals', ctrlTravlr.meals);
router.get('/news', ctrlTravlr.news);
router.get('/about', ctrlTravlr.about);
router.get('/contact', ctrlTravlr.contact);

module.exports = router;