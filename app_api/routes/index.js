const express = require('express');
const router = express.Router();

const tripsRouter = require('./trips');

router.use('/', tripsRouter);

module.exports = router;