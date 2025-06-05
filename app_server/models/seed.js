const mongoose = require('mongoose');
const Trip = require('./travlr'); // this loads and registers the schema

const dbURI = 'mongodb://127.0.0.1/travlr';

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err => {
  console.log('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

const seedTrips = [
  {
    code: "GAL123",
    name: "Gale Reef",
    length: "5 days",
    start: "2025-08-21T08:00:00Z",
    resort: "Emerald Bay, 5 stars",
    perPerson: "1999.99",
    image: "reef1.jpg",
    description: "Update Reef Sed et augue lorem. In sit amet placerat arcu"
  },
  {
    code: "DAW098",
    name: "Dawson's Reef",
    length: "4 nights / 5 days",
    start: "2025-08-22T08:00:00Z",
    resort: "Dawson Lagoon, 4 stars",
    perPerson: "1399.99",
    image: "reef2.jpg",
    description: "Dawson's Reef Integer magna leo, posuere et dignissim"
  },
  {
    code: "CLA122",
    name: "Claire's Reef",
    length: "4 nights / 5 days",
    start: "2025-08-23T08:00:00Z",
    resort: "Coral Sands, 5 stars",
    perPerson: "1599.99",
    image: "reef3.jpg",
    description: "Claire's Reef Donec sed felis risus. Nulla facilisi. Donec"
  }
];

const seedDB = async () => {
  await Trip.deleteMany({});
  await Trip.insertMany(seedTrips);
  console.log(`Successfully seeded ${seedTrips.length} trips.`);
  mongoose.connection.close();
};

seedDB().catch(err => {
  console.error('Seeding error:', err);
  mongoose.connection.close();
});
