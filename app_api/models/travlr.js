const mongoose = require('mongoose');

/**
 * Mongoose schema for a Trip
 * Fields:
 * - code: Unique identifier for the trip
 * - name: Trip name/title
 * - length: Duration of the trip (e.g., "7 days")
 * - start: Start date of the trip
 * - resort: Name of the resort
 * - perPerson: Cost per person
 * - image: URL to trip image
 * - description: Textual description of the trip
 */
const tripSchema = new mongoose.Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  length: { type: String, required: true },
  start: { type: Date, required: true },
  resort: { type: String, required: true },
  perPerson: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true }
});

// Register the model
mongoose.model('Trip', tripSchema);
