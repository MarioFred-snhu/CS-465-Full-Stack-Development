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

module.exports = { tripsList };