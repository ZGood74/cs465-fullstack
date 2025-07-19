const express = require('express');
const router = express.Router();

const { expressjwt: jwt } = require('express-jwt');
const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');

// JWT middleware for protected routes
const auth = jwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
  userProperty: 'payload'
});

/**
 * @route   GET /trips
 * @desc    Get all trips
 * @access  Public
 */
router.get('/trips', tripsController.tripsList);

/**
 * @route   POST /trips
 * @desc    Create a new trip
 * @access  Protected
 */
router.post('/trips', auth, tripsController.tripsAddTrip);

/**
 * @route   GET /trips/:tripCode
 * @desc    Get a trip by its tripCode
 * @access  Public
 */
router.get('/trips/:tripCode', tripsController.tripsFindByCode);

/**
 * @route   PUT /trips/:tripCode
 * @desc    Update a trip by its tripCode
 * @access  Protected
 */
router.put('/trips/:tripCode', auth, tripsController.tripsUpdateTrip);

/**
 * @route   POST /register
 * @desc    Register a new user
 * @access  Public
 */
router.post('/register', authController.register);

/**
 * @route   POST /login
 * @desc    Log in a user
 * @access  Public
 */
router.post('/login', authController.login);

module.exports = router;
