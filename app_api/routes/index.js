const express = require('express');
const router = express.Router();

console.log('API Routes file loaded');

const tripsController = require('../controllers/trips');

router
  .route('/trips')
  .get((req, res) => {
    console.log('GET /api/trips route hit');
    tripsController.tripsList(req, res);
  });

module.exports = router;
