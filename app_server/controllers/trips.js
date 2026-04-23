const tripsList = async (req, res) => {
  try {
    const response = await fetch('http://localhost:3000/api/trips');
    if (!response.ok) {
      return res.status(500).send(`API error: ${response.status}`);
    }

    const trips = await response.json();

    res.render('travel', {
      title: 'Travlr Getaways',
      subtitle: 'Travel',
      trips
    });
  } catch (err) {
    res.status(500).send(`Error loading trips from API: ${err}`);
  }
};

const tripsFindByCode = async (req, res) => {
  try {
    const response = await fetch(`http://localhost:3000/api/trips/${req.params.tripCode}`);
    if (!response.ok) {
      return res.status(404).send(`Trip not found: ${response.status}`);
    }

    const trip = await response.json();

    res.render('trip-detail', {
      title: trip.name,
      subtitle: trip.name,
      trip
    });
  } catch (err) {
    res.status(500).send(`Error loading trip from API: ${err}`);
  }
};

module.exports = {
  tripsList,
  tripsFindByCode
};