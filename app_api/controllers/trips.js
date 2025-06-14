const mongoose = require('mongoose');

// Register the Trip model by requiring the schema file
require('../models/travlr');

// Access the registered model
const Trip = mongoose.model('Trip');

// GET: /api/trips — list all trips
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find(); // returns all documents
    if (!trips || trips.length === 0) {
      return res.status(404).json({ message: 'No trips found' });
    }
    res.status(200).json(trips);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching trips', error: err.message });
  }
};

// GET: /api/trips/:tripCode — get one trip by code
const tripsFindByCode = async (req, res) => {
  const { tripCode } = req.params;
  try {
    const trip = await Trip.find({ code: tripCode });
    if (!trip || trip.length === 0) {
      return res.status(404).json({ message: 'Trip not found for code: ' + tripCode });
    }
    res.status(200).json(trip);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching trip', error: err.message });
  }
};

module.exports = {
  tripsList,
  tripsFindByCode
};
