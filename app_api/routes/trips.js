const express = require('express');
const router = express.Router();
const { expressjwt: jwt } = require('express-jwt');

const tripsController = require('../controllers/trips');

// 🔐 JWT middleware
const auth = jwt({
  secret: 'MY_SECRET_KEY',
  algorithms: ['HS256']
});

// Public routes
router.get('/trips', tripsController.tripsList);
router.get('/trips/:tripCode', tripsController.tripsFindByCode);

// 🔒 Protected routes (ADMIN ONLY)
router.post('/trips', auth, tripsController.tripsAddTrip);
router.put('/trips/:tripCode', auth, tripsController.tripsUpdateTrip);
router.delete('/trips/:tripCode', auth, tripsController.tripsDeleteTrip);

module.exports = router;