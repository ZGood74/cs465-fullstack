const mongoose = require('mongoose');
require('../models/travlr');
const Trip = mongoose.model('Trip');

/**
 * GET: /api/trips
 * Description: Return a list of all trips from the database
 */
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find().lean();
    if (!trips || trips.length === 0) {
      return res.status(404).json({ message: 'No trips found' });
    }
    res.status(200).json(trips);
  } catch (err) {
    console.error('Error in tripsList:', err);
    res.status(500).json({ message: 'Error fetching trips', error: err.message });
  }
};

/**
 * GET: /api/trips/:tripCode
 * Description: Retrieve a single trip by its unique code
 */
const tripsFindByCode = async (req, res) => {
  const { tripCode } = req.params;
  try {
    const trip = await Trip.findOne({ code: tripCode }).lean();
    if (!trip) {
      return res.status(404).json({ message: `Trip not found for code: ${tripCode}` });
    }
    res.status(200).json(trip);
  } catch (err) {
    console.error('Error in tripsFindByCode:', err);
    res.status(500).json({ message: 'Error fetching trip by code', error: err.message });
  }
};

/**
 * POST: /api/trips
 * Description: Add a new trip using request body data
 */
const tripsAddTrip = async (req, res) => {
  const requiredFields = ['code', 'name', 'length', 'start', 'resort', 'perPerson', 'image', 'description'];

  // Check for missing fields
  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res.status(400).json({ message: `Missing required field: ${field}` });
    }
  }

  try {
    const existing = await Trip.findOne({ code: req.body.code });
    if (existing) {
      return res.status(409).json({ message: 'Trip with this code already exists.' });
    }

    const newTrip = await Trip.create(req.body);
    res.status(201).json(newTrip);
  } catch (err) {
    console.error('Error in tripsAddTrip:', err);
    res.status(400).json({ message: 'Failed to add trip', error: err.message });
  }
};

/**
 * PUT: /api/trips/:tripCode
 * Description: Update an existing trip by code
 */
const tripsUpdateTrip = async (req, res) => {
  const requiredFields = ['code', 'name', 'length', 'start', 'resort', 'perPerson', 'image', 'description'];
  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res.status(400).json({ message: `Missing required field: ${field}` });
    }
  }

  try {
    const updatedTrip = await Trip.findOneAndUpdate(
      { code: req.params.tripCode },
      req.body,
      { new: true, runValidators: true }
    ).exec();

    if (!updatedTrip) {
      return res.status(404).json({ message: 'Trip not found or update failed' });
    }

    res.status(200).json(updatedTrip);
  } catch (err) {
    console.error('Error in tripsUpdateTrip:', err);
    res.status(500).json({ message: 'Error updating trip', error: err.message });
  }
};

module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip
};
