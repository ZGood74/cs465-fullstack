const fs = require('fs');
const path = require('path');

// GET travel view
const travel = (req, res) => {
  const dataPath = path.join(__dirname, '../../data/trips.json');
  const rawData = fs.readFileSync(dataPath);
  const trips = JSON.parse(rawData);

  res.render('travel', {
    title: 'Travlr Getaways',
    trips
  });
};

module.exports = {
  travel
};
