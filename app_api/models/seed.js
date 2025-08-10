/**
 * Seed 50–100 Trip records from Trips_Test_Data.json
 * Run: node app_api/models/seed.js
 */

require('dotenv').config({ path: require('path').join(process.cwd(), '.env') });
const mongoose = require('mongoose');
const path = require('path');

// If your './db' already connects using MONGODB_URI, keep it.
// Otherwise comment the next line and let the explicit connect() below run.
try { require('./db'); } catch { /* ignore if you don't have ./db */ }

// Register the Trip model (adjust if your model file has a different name)
require('./travlr'); // change to './trips' if that's your filename

// Try to get the model by the usual name, then fall back to 'trips'
let Trip;
try { Trip = mongoose.model('Trip'); }
catch { Trip = mongoose.model('trips'); }

const dataPath = path.join(__dirname, 'Trips_Test_Data.json');
let raw;
try {
  raw = require(dataPath); // array of { name, image, description } for 60 items
} catch (e) {
  console.error(`Can't find Trips_Test_Data.json at: ${dataPath}`);
  process.exit(1);
}

// Normalize JSON to your schema: add safe defaults if missing
const normalize = (t, i) => ({
  code: t.code || `T${String(i + 1).padStart(3, '0')}`,
  name: t.name || `Trip ${i + 1}`,
  length: t.length ?? 5,
  start: t.start ? new Date(t.start) : new Date(),
  resort: t.resort || 'Test Resort',
  perPerson: t.perPerson ?? 1000,
  image: t.image || `reef${i + 1}.jpg`,
  description: t.description || 'Test description.'
});
const docs = raw.map(normalize);

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/travlr';

// If ./db didn’t connect, connect here
if (mongoose.connection.readyState === 0) {
  mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
}

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err.message);
});

mongoose.connection.once('open', async () => {
  console.log('Connected to MongoDB');

  try {
    const del = await Trip.deleteMany({});
    console.log(`Cleared existing trips: ${del.deletedCount} removed`);
    const inserted = await Trip.insertMany(docs);
    console.log(`Inserted ${inserted.length} trip records.`);
  } catch (err) {
    console.error('Seeding error:', err);
  } finally {
    await mongoose.connection.close();
    console.log('Disconnected from MongoDB');
  }
});
