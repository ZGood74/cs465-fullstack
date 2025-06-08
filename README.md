# CS - 465
# Travlr Getaways - Module 1

This is the Module 1 baseline for the Travlr Getaways project in CS 465: Full Stack Development.  
It includes the Express app setup and the static mockup site integration.

## Project Features

- Node.js and Express.js app initialized
- Static HTML, CSS, and images served from the `/public` folder
- GitHub repository connected and committed to the `module1` branch
- `.gitignore` file configured properly
- App successfully runs locally at `http://localhost:3000`

## How to Run

1. Clone the repository  
2. Run `npm install`  
3. Start the server with `npm start`  
4. Visit `http://localhost:3000` in your browser

## Notes

This is a starting point. Dynamic functionality and templating will be added in future modules.

## Module 2 - MVC Routing

In this module, the application was refactored to use the **Model-View-Controller (MVC)** design pattern. The following updates were made:

- Created a new `app_server` folder to contain all application logic
- Moved `routes` and `views` into `app_server`
- Created a new `controllers` folder to hold controller logic
- Built a `main.js` controller to render the homepage
- Built a `travlr.js` controller and route for the `/travel` page
- Created Handlebars views (`.hbs` files) using the `hbs` templating engine
- Created `partials` for reusable components (`header.hbs` and `footer.hbs`)
- Updated `app.js` to register new routes, views, and Handlebars partials
- Pushed changes to the `module2` branch on GitHub

Verified the `/travel` page renders correctly at `http://localhost:3000/travel`

# Travlr Getaways – Module 3 
Module 3: Static HTML to Templates with JSON  

##  Overview
This web application is part of a semester-long project to build a full stack travel website using the MEAN stack (MongoDB, Express.js, Angular, Node.js). In this module, the focus was on converting static HTML to dynamic pages using JSON and Handlebars (HBS) templating.

---

##  Technologies Used
- Node.js  
- Express.js  
- Handlebars (HBS)  
- HTML/CSS  
- JavaScript  
- JSON  

---

##  What Was Completed in Module 3
- Created a new Git branch `module3` to isolate module-specific changes.
- Built a `data/trips.json` file to store mock travel data.
- Replaced hardcoded HTML in `travel.hbs` with dynamic content using `{{#each}}` and Handlebars directives.
- Implemented `travel.js` controller logic to read from the JSON file and pass data to the view.
- Successfully rendered a dynamic list of trips (name, description, image) on the `/travel` page.
- Verified everything loads through Express server and renders dynamically via MVC pattern.

---


---

##  How to Run
1. Clone the repo  
2. Run `npm install`  
3. Start the app using `npm start`  
4. Navigate to `http://localhost:3000/travel` to view the dynamic travel page.

---

##  Status
 Module 3 successfully completed and tested.  
 Pushed to GitHub on branch `module3` with all required files and functionality.

---

##  Module 4: NoSQL Integration with MongoDB

In Module 4, we transitioned from static JSON files to a live NoSQL database using **MongoDB**. This marked a critical milestone in the full stack development of the Travlr Getaways application.

### Key Updates:
- Installed and configured **Mongoose** for MongoDB interaction.
- Created a **Mongoose schema** (`travlr.js`) to define and validate trip data.
- Developed a **database connection module** (`db.js`) to manage MongoDB connectivity.
- Built a **seeding script** (`seed.js`) to populate the database with initial trip records.
- Verified successful seeding through **MongoDB Compass**.

These updates ensure that the application now leverages a dynamic, queryable database, preparing it for full API integration and future CRUD operations.

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


