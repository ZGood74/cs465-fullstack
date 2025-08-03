const mongoose = require('mongoose');

/**
 * Mongoose schema for a Trip
 * Includes stricter validation, default values, and indexing for performance.
 */
const tripSchema = new mongoose.Schema({
  code: {
    type: String,
    required: [true, 'Trip code is required'],
    unique: true,
    trim: true,
    uppercase: true,
    match: [/^[A-Z0-9]{3,10}$/, 'Code must be 3-10 uppercase letters/numbers']
  },
  name: {
    type: String,
    required: [true, 'Trip name is required'],
    trim: true,
    minlength: [3, 'Trip name must be at least 3 characters long']
  },
  length: {
    type: String,
    required: [true, 'Trip length is required'],
    trim: true,
    match: [/^\d+\s(days|nights)$/, 'Length must follow format like "7 days"']
  },
  start: {
    type: Date,
    required: [true, 'Start date is required'],
    validate: {
      validator: value => value >= new Date(),
      message: 'Start date must be in the future'
    }
  },
  resort: {
    type: String,
    required: [true, 'Resort name is required'],
    trim: true
  },
  perPerson: {
    type: String,
    required: [true, 'Per-person cost is required'],
    trim: true,
    match: [/^\$\d+(\.\d{2})?$/, 'Cost must be formatted like "$999.99"']
  },
  image: {
    type: String,
    required: [true, 'Image URL is required'],
    trim: true,
    match: [/^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/, 'Must be a valid image URL']
  },
  description: {
    type: String,
    required: [true, 'Trip description is required'],
    trim: true,
    maxlength: [1000, 'Description must be less than 1000 characters']
  }
}, {
  timestamps: true
});

// Indexing for improved query performance
tripSchema.index({ code: 1 });
tripSchema.index({ start: 1 });

// Register the model
mongoose.model('Trip', tripSchema);
