const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find({}).lean();
    return res.status(200).json(trips);
  } catch (err) {
    return res.status(500).json({
      message: 'Error retrieving trips',
      error: err.toString()
    });
  }
};

const tripsFindByCode = async (req, res) => {
  try {
    const trip = await Trip.findOne({ tripCode: req.params.tripCode }).lean();

    if (!trip) {
      return res.status(404).json({ message: 'tripCode not found' });
    }

    return res.status(200).json(trip);
  } catch (err) {
    return res.status(500).json({
      message: 'Error retrieving trip',
      error: err.toString()
    });
  }
};

const tripsAddTrip = async (req, res) => {
  try {
    const trip = await Trip.create({
      tripCode: req.body.tripCode,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description
    });

    return res.status(201).json(trip);
  } catch (err) {
    return res.status(400).json({
      message: 'Error adding trip',
      error: err.toString()
    });
  }
};

const tripsUpdateTrip = async (req, res) => {
  try {
    const trip = await Trip.findOneAndUpdate(
      { tripCode: req.params.tripCode },
      {
        tripCode: req.body.tripCode,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
      },
      { new: true }
    );

    if (!trip) {
      return res.status(404).json({ message: 'tripCode not found' });
    }

    return res.status(200).json(trip);
  } catch (err) {
    return res.status(400).json({
      message: 'Error updating trip',
      error: err.toString()
    });
  }
};

const tripsDeleteTrip = async (req, res) => {
  try {
    const trip = await Trip.findOneAndDelete({ tripCode: req.params.tripCode });

    if (!trip) {
      return res.status(404).json({ message: 'tripCode not found' });
    }

    return res.status(200).json({ message: 'Trip deleted successfully' });
  } catch (err) {
    return res.status(500).json({
      message: 'Error deleting trip',
      error: err.toString()
    });
  }
};

module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip,
  tripsDeleteTrip
};