const mongoose = require('mongoose');
const Trip = mongoose.model('Trip');

const travel = async (req, res) => {
  try {
    const trips = await Trip.find();

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
    console.error('Error fetching trips:', err.message);
    res.render('travel', {
      title: 'Travlr Getaways',
      trips: [],
      message: 'Something went wrong retrieving trips'
    });
  }
};

module.exports = {
  travel
};
