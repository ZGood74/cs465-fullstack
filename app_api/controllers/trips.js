const mongoose = require('mongoose');
require('../models/travlr'); // This registers the schema

const Trip = mongoose.model('trips');

// GET: /trips - lists all the trips
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find().exec();
    if (!trips || trips.length === 0) {
      return res.status(404).json({ message: 'No trips found' });
    } else {
      return res.status(200).json(trips);
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  tripsList
};
