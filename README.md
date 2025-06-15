Travlr Getaways Admin - Module 6
This project completes Module 6 of the CS465 Full-Stack Development course. It showcases a functional MEAN stack (MongoDB, Express, Angular, Node.js) application with working CRUD operations for managing travel trips.

Overview
The admin panel allows users to view, add, and edit trip data. Angular handles the front-end logic and rendering, while the Express backend connects to MongoDB using Mongoose for data persistence. Trips are displayed in a clean card layout and can be updated through a form-driven UI.

Features
Trip Listing: Fetches and displays all trips from the MongoDB database using a GET request. Each trip is shown via a standalone card component.

Add Trip: Allows users to create new trips using an Angular reactive form. Sends a POST request to the backend to add a trip to the database.

Edit Trip: Fetches existing trip data using the trip code. Populates the form for editing and sends a PUT request to update the trip in the database.

Technologies Used
Angular with Standalone Components and Reactive Forms

Express.js and Node.js

MongoDB with Mongoose ODM

MongoDB Compass for local database inspection

Setup Instructions
Start your local MongoDB server (ensure MongoDB is running on default port 27017).

In the root project directory, run npm install to install backend dependencies.

Start the backend server with npm start (runs on http://localhost:3000).

Navigate to the app_admin folder for the Angular frontend.

Run npm install to install Angular dependencies.

Launch the Angular app using ng serve (runs on http://localhost:4200).

Use the UI to add or edit trips and observe updates reflected in the MongoDB database.

Git Workflow Used
Created branch: git checkout -b module6

Committed changes: git add . then git commit -m "Complete Module 6 functionality"

Pushed to GitHub: git push origin module6

Status
Module 6 is fully complete. Trip listing, creation, and update operations are working as expected through the Angular interface and Express API. The application follows the MVC pattern and uses RESTful endpoints.

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
