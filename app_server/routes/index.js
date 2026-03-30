const express = require('express');
const router = express.Router();

const ctrlTravlr = require('../controllers/travlr');
const ctrlTrips = require('../controllers/trips');

router.get('/', ctrlTravlr.home);

// IMPORTANT: travel page now renders from API JSON
router.get('/travel', ctrlTrips.tripsList);

router.get('/rooms', ctrlTravlr.rooms);
router.get('/meals', ctrlTravlr.meals);
router.get('/news', ctrlTravlr.news);
router.get('/about', ctrlTravlr.about);
router.get('/contact', ctrlTravlr.contact);

module.exports = router;