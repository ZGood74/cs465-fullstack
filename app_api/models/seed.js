/**
 * Seed 60 Trip records from Trips_Test_Data.json with fields formatted
 * to satisfy your schema validators.
 * Run: node app_api/models/seed.js
 */

require('dotenv').config({ path: require('path').join(process.cwd(), '.env') });
const mongoose = require('mongoose');
const path = require('path');

try { require('./db'); } catch { /* ignore if not present */ }

// Register the Trip model (change './travlr' if your file name differs)
require('./travlr');

let Trip;
try { Trip = mongoose.model('Trip'); }
catch { Trip = mongoose.model('trips'); }

// Load the raw data (array of { name, image, description })
const dataPath = path.join(__dirname, 'Trips_Test_Data.json');
let raw;
try { raw = require(dataPath); }
catch {
  console.error(`Can't find Trips_Test_Data.json at: ${dataPath}`);
  process.exit(1);
}

// Helpers to satisfy validations
const toDaysString = (n) => `${n} days`; // e.g., "7 days"
const futureDate = (daysAhead) => new Date(Date.now() + daysAhead * 24 * 60 * 60 * 1000);
const toCurrency = (n) => {
  const num = Number(n);
  const fixed = isFinite(num) ? num : 1000;
  return `$${fixed.toFixed(2)}`; // "$999.99"
};

// Normalize into your schema shape
const docs = raw.map((t, i) => {
  const dayCount = (i % 6) + 5; // 5–10 days
  const price = 900 + (i % 10) * 50; // 900, 950, ... 1350
  return {
    code: t.code || `T${String(i + 1).padStart(3, '0')}`,
    name: t.name || `Trip ${i + 1}`,
    length: typeof t.length === 'string' ? t.length : toDaysString(dayCount),
    start: t.start ? new Date(t.start) : futureDate(14 + i), // always future
    resort: t.resort || 'Test Resort',
    perPerson: typeof t.perPerson === 'string' ? t.perPerson : toCurrency(price),
    image: t.image || `reef${i + 1}.jpg`,
    description: t.description || 'Test description.'
  };
});

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/travlr';
if (mongoose.connection.readyState === 0) {
  mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
}

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err.message);
});

mongoose.connection.once('open', async () => {
  console.log('Connected to MongoDB');
  try {
    await Trip.deleteMany({});
    const inserted = await Trip.insertMany(docs, { ordered: false });
    console.log(`Inserted ${inserted.length} trip records.`);
  } catch (err) {
    console.error('Seeding error:', err);
  } finally {
    await mongoose.connection.close();
    console.log('Disconnected from MongoDB');
  }
});
