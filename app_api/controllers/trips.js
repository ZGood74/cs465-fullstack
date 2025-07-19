const mongoose = require('mongoose');

// Register the Trip model by requiring the schema file
require('../models/travlr');

// Access the registered Trip model
const Trip = mongoose.model('Trip');

/**
 * GET: /api/trips
 * Description: Return a list of all trips from the database
 */
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find();
    if (!trips || trips.length === 0) {
      return res.status(404).json({ message: 'No trips found' });
    }
    res.status(200).json(trips);
  } catch (err) {
    res.status(500).json({
      message: 'Error fetching trips',
      error: err.message
    });
  }
};

/**
 * GET: /api/trips/:tripCode
 * Description: Retrieve a single trip by its unique code
 */
const tripsFindByCode = async (req, res) => {
  const { tripCode } = req.params;
  try {
    const trip = await Trip.findOne({ code: tripCode });
    if (!trip) {
      return res.status(404).json({ message: `Trip not found for code: ${tripCode}` });
    }
    res.status(200).json(trip);
  } catch (err) {
    res.status(500).json({
      message: 'Error fetching trip by code',
      error: err.message
    });
  }
};

/**
 * POST: /api/trips
 * Description: Add a new trip using request body data
 */
const tripsAddTrip = async (req, res) => {
  try {
    const newTrip = await Trip.create(req.body);
    res.status(201).json(newTrip);
  } catch (err) {
    res.status(400).json({
      message: 'Failed to add trip',
      error: err.message
    });
  }
};

/**
 * PUT: /api/trips/:tripCode
 * Description: Update an existing trip by code
 */
const tripsUpdateTrip = async (req, res) => {
  try {
    const updatedTrip = await Trip.findOneAndUpdate(
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
      },
      { new: true } // Return the updated document
    ).exec();

    if (!updatedTrip) {
      return res.status(400).json({ message: 'Trip not found or update failed' });
    }

    res.status(201).json(updatedTrip);
  } catch (err) {
    res.status(500).json({
      message: 'Error updating trip',
      error: err.message
    });
  }
};

// Export controller functions
module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip
};
