// Bring in the DB connection and the Trip schema
const mongoose = require('mongoose');
const db = require('./db');
const Trip = require('./travlr');

// Seed data array
const seedTrips = [
  {
    code: "BALI1234",
    name: "Bali Beach Paradise",
    length: "6 nights / 5 days",
    start: "2025-08-14T08:00:00Z",
    resort: "Dreamland Bay, 5 stars",
    perPerson: "1499.99",
    image: "bali.jpg",
    description: "Relax on the stunning beaches of Bali with crystal clear waters and vibrant culture."
  },
  {
    code: "TOKY5678",
    name: "Tokyo City Lights",
    length: "4 nights / 3 days",
    start: "2025-09-10T08:00:00Z",
    resort: "Shibuya Stay, 4 stars",
    perPerson: "1299.99",
    image: "tokyo.jpg",
    description: "Experience the bustling nightlife, cutting-edge technology, and rich traditions of Tokyo."
  },
  {
    code: "SWISS7890",
    name: "Swiss Alps Adventure",
    length: "5 nights / 4 days",
    start: "2025-12-20T08:00:00Z",
    resort: "Mountain Escape Lodge, 5 stars",
    perPerson: "1999.99",
    image: "swiss.jpg",
    description: "Hit the slopes and explore beautiful snowy landscapes in the heart of Switzerland."
  }
];

// Async function to seed database
const seedDB = async () => {
  try {
    await Trip.deleteMany({});
    const result = await Trip.insertMany(seedTrips);
    console.log(`Successfully seeded ${result.length} trips.`);
  } catch (err) {
    console.error('Error seeding trips:', err);
  } finally {
    mongoose.connection.close();
  }
};

seedDB();
