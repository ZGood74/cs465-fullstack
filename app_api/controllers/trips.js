const mongoose = require('mongoose');

// Register the Trip model by requiring the schema file
require('../models/travlr');

// Access the registered model
const Trip = mongoose.model('Trip');

// GET: /api/trips — list all trips
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find();
    if (!trips || trips.length === 0) {
      return res.status(404).json({ message: 'No trips found' });
    }
    res.status(200).json(trips);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching trips', error: err.message });
  }
};

//  FIXED: GET one trip by code
const tripsFindByCode = async (req, res) => {
  const { tripCode } = req.params;
  try {
    const trip = await Trip.findOne({ code: tripCode });
    if (!trip) {
      return res.status(404).json({ message: 'Trip not found for code: ' + tripCode });
    }
    console.log("Trip found and returned:", trip); //  DEBUG
    res.status(200).json(trip);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching trip', error: err.message });
  }
};

// POST: /api/trips — add a new trip
const tripsAddTrip = async (req, res) => {
  try {
    const newTrip = await Trip.create(req.body);
    res.status(201).json(newTrip);
  } catch (err) {
    res.status(400).json({ message: 'Failed to add trip', error: err.message });
  }
};

// PUT: /api/trips/:tripCode — update an existing trip
const tripsUpdateTrip = async (req, res) => {
  console.log(req.params);
  console.log(req.body);

  const q = await Trip
    .findOneAndUpdate(
      { code: req.params.tripCode },
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
      }
    )
    .exec();

  if (!q) {
    return res.status(400).json({ message: 'Trip not found or update failed' });
  } else {
    return res.status(201).json(q);
  }
};

module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip
};
