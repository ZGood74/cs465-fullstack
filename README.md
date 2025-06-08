# Travlr Getaways – Module 5

## Overview

Module 5 focused on evolving the Travlr Getaways application into an API-driven system. This included creating RESTful endpoints, moving data to a MongoDB database, and dynamically rendering trip data on the frontend using the Handlebars template engine.

## Features

- API routes for trips created under `app_api`
- `GET /api/trips` returns all available trips
- `GET /api/trips/:tripCode` returns details of a specific trip
- MongoDB schema created using Mongoose
- Seed script (`seed.js`) populates the database with sample trip data
- Updated `travel.hbs` view to dynamically load data from the API
- Integration of backend data into the public frontend

## Technologies

- Node.js  
- Express.js  
- MongoDB + Mongoose  
- Handlebars (hbs)  
- Postman (for API testing)

## Setup Instructions

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Seed the database**

   ```bash
   node app_api/models/seed.js
   ```

3. **Start the server**

   ```bash
   npm start
   ```

4. **Open the app**

   - Public site: `http://localhost:3000/travel`
   - API endpoint: `http://localhost:3000/api/trips`

## API Endpoints

- `GET /api/trips`  
  Fetches all trips from the database.

- `GET /api/trips/:tripCode`  
  Fetches details of a specific trip by code (e.g. `GR100`).

## Notes

- The transition to an API architecture allows future expansion to SPA frameworks or mobile apps.
- The database is locally hosted on MongoDB (`mongodb://127.0.0.1/travlr`).
- Error handling is implemented for missing or invalid API routes.

## Course

**CS 465 – Full Stack Development**  
Southern New Hampshire University
