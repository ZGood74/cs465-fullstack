const express = require('express');
const router = express.Router();

const { expressjwt: jwt } = require('express-jwt');
const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');

// 🛡️ JWT Middleware
const auth = jwt({
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256'],
  userProperty: 'payload'
});

// GET all trips (public) + POST new trip (protected)
router
  .route('/trips')
  .get(tripsController.tripsList)
  .post(auth, tripsController.tripsAddTrip);

// GET one trip by code (public) + PUT update (protected)
router
  .route('/trips/:tripCode')
  .get(tripsController.tripsFindByCode)
  .put(auth, tripsController.tripsUpdateTrip);

// Register and login routes (public)
router
  .route('/register')
  .post(authController.register);

router
  .route('/login')
  .post(authController.login);

module.exports = router;
