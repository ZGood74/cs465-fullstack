const fetch = require('node-fetch');

const travel = async (req, res) => {
  try {
    const response = await fetch('http://localhost:3000/api/trips');
    const trips = await response.json();

    let message = null;
    if (!(trips instanceof Array)) {
      message = 'API lookup error';
    } else if (!trips.length) {
      message = 'No trips found';
    }

    res.render('travel', {
      title: 'Travlr Getaways',
      trips,
      message
    });
  } catch (err) {
    console.error('Error fetching trips from API:', err.message);
    res.render('travel', {
      title: 'Travlr Getaways',
      trips: [],
      message: 'Something went wrong with the API call'
    });
  }
};

module.exports = {
  travel
};
