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

# Travlr Getaways Admin - Module 6

This project completes Module 6 of the CS465 Full-Stack Development course. It showcases a functional MEAN stack (MongoDB, Express, Angular, Node.js) application with working CRUD operations for managing travel trips.

## Overview

The admin panel allows users to view, add, and edit trip data. Angular handles the front-end logic and rendering, while the Express backend connects to MongoDB using Mongoose for data persistence. Trips are displayed in a clean card layout and can be updated through a form-driven UI.

## Features

- **Trip Listing**: Fetches and displays all trips from the MongoDB database using a GET request. Each trip is shown via a standalone card component.
- **Add Trip**: Allows users to create new trips using an Angular reactive form. Sends a POST request to the backend to add a trip to the database.
- **Edit Trip**: Fetches existing trip data using the trip code. Populates the form for editing and sends a PUT request to update the trip in the database.

## Technologies Used

- Angular with Standalone Components and Reactive Forms
- Express.js and Node.js
- MongoDB with Mongoose ODM
- MongoDB Compass for local database inspection

## Setup Instructions

1. Start your local MongoDB server (ensure MongoDB is running on default port 27017).
2. In the root project directory, run `npm install` to install backend dependencies.
3. Start the backend server with `npm start` (runs on `http://localhost:3000`).
4. Navigate to the `app_admin` folder for the Angular frontend.
5. Run `npm install` to install Angular dependencies.
6. Launch the Angular app using `ng serve` (runs on `http://localhost:4200`).
7. Use the UI to add or edit trips and observe updates reflected in the MongoDB database.

## Git Workflow Used

- Created branch: `git checkout -b module6`
- Committed changes: `git add .` then `git commit -m "Complete Module 6 functionality"`
- Pushed to GitHub: `git push origin module6`

## Status

Module 6 is fully complete. Trip listing, creation, and update operations are working as expected through the Angular interface and Express API. The application follows the MVC pattern and uses RESTful endpoints.

# CS 465 - Module 7: Authentication and JWT Integration

This module expands the Travlr Getaways full-stack application by adding secure user authentication. It includes a working registration and login system, integration of JWT, and protected API access.

Features Implemented:
- User registration endpoint (POST /api/register)
- User login endpoint (POST /api/login)
- JWT issued on successful login and stored in browser localStorage
- Angular HTTP interceptor adds Authorization header with JWT
- Express routes protected with JWT using Passport
- API tested with Postman using valid Bearer token
- Angular frontend loads trips using authenticated requests

How to Run:
1. Start the backend:
   - Navigate to the root project folder
   - Run: npm install
   - Then: npm start

2. Start the frontend:
   - Navigate to angular-src
   - Run: npm install
   - Then: ng serve

3. Open the browser at http://localhost:4200
   - The backend runs at http://localhost:3000

Notes:
- JWT is saved in localStorage with the key: travlr-token
- HTTP requests to protected routes include the Authorization: Bearer <token> header automatically
- The HTTP interceptor is set up in app.config.ts

Angular/Node Version Note:
This project was built using the official Angular CLI commands provided in the Full Stack Guide. The Angular version is 17+ and Node is version 22.15.0. A comment has been added to the assignment submission explaining this configuration, as it caused compatibility concerns in the prior module.

## CS 465 Final Reflection

## Architecture
- This project used two types of frontend development. The initial version relied on Express with Handlebars templates to render server-side HTML pages. This approach allowed for a simple, functional customer interface with dynamic data handled by the server. In later stages, the application transitioned to an Angular single-page application (SPA), which handled routing on the client side and delivered a more dynamic and modern user experience. The SPA architecture also improved performance by reducing full page reloads and made it easier to build reusable UI components.
- The backend used a NoSQL MongoDB database. This choice was made because MongoDB stores data as JSON-like documents, making it a natural fit for JavaScript-based applications and easy to connect with Angular through HTTP and JSON. The flexibility of MongoDB’s schema-less design allowed for rapid development and modification of the data structure as the project evolved. Mongoose was used to define data models, enforce validation, and streamline interaction with the database.

## Functionality
- JSON (JavaScript Object Notation) is a data format used to transmit structured data between systems. Unlike JavaScript, it is not executable code but a text-based format that represents key-value pairs and arrays. In this project, JSON was the core structure used to send and receive data between the Angular frontend and the Express backend via HTTP requests and responses.
- Code was frequently refactored to improve functionality and maintainability. For example, HTTP calls were moved into Angular services to separate logic from the components, and form inputs were converted into reusable reactive form components. The trip display UI was modularized into components, allowing the same code to be used across different views. On the backend, route handlers were organized using RESTful principles to simplify request handling and support clean URL structures. These improvements resulted in easier testing, less duplication, and faster updates.

## Testing
- Testing was conducted using Postman to verify that all backend endpoints worked correctly. This included validating data retrieval (GET), creation (POST), updates (PUT), and deletion (DELETE). Postman made it easy to simulate real HTTP requests and check the returned JSON responses.
- When JWT-based authentication was added for the admin panel, additional testing was needed to verify login, token generation, and token-based access control. Protected routes were tested with valid and invalid tokens to ensure proper authorization. On the frontend, Angular route guards were tested to confirm that admin-only routes were inaccessible without a valid login.
- Understanding how methods (GET, POST, etc.), endpoints (URLs and routes), and security mechanisms (JWT, middleware) work together was crucial to implementing a secure full stack application. Express middleware was used to verify tokens and protect routes, while Angular managed the login state and sent tokens with requests as needed.

## Reflection
This course has significantly contributed to my professional development and technical confidence. I’ve learned how to build a full stack web application from the ground up using technologies that are widely used in the industry, including Angular, Node.js, Express, and MongoDB. I now understand how each layer of a modern web application works and how to connect them using RESTful APIs and JSON data. I’ve also gained hands-on experience with routing, authentication, frontend and backend logic separation, API testing, and component-based UI development.

By completing this project, I’ve strengthened my ability to work across the full stack and gained practical knowledge that I can apply in real-world software development roles. I feel more prepared to pursue job opportunities in web or software development, freelance work, or even my own game development projects. The skills I’ve built in this course make me more marketable and better equipped to succeed in the tech industry.


# Professional Self-Assessment (CS 499 ePortfolio)
**Author:** Zack Good

This self-assessment summarizes my growth through the Computer Science program and explains how the artifacts in this ePortfolio demonstrate the program outcomes. I focused my capstone on improving a **full-stack web application (Travlr)** because it showcases end-to-end skills: database modeling, secure REST APIs, and a responsive Angular front end.

## Selected Specialization — Full-Stack Web Development
I enjoy working across the stack so that data, logic, and UI decisions fit together. The Travlr project and my capstone enhancements provided a realistic setting to refine API design, database modeling with Mongoose, Angular component/service structure, and application security.

## Evidence of Program Outcomes
**1) Collaborative strategies.**  
I used Git and GitHub with a clear branching model: module branches for CS 465, a `final-capstone` branch for CS 499, and tagged releases. I wrote setup/run instructions so others can clone, configure environment variables, seed data, and test consistently. Commit messages and incremental changes mirror a team workflow.

**2) Professional communication.**  
I produced a code-review screencast and an enhancement overview video and included written narratives for each enhancement. This README serves as a project index that points to the original artifact (in Releases), videos (in Releases), narratives, and branches. These materials explain design choices, trade-offs, and how to reproduce results for a technical audience.

**3) Design and evaluation of computing solutions.**  
I refactored Express controllers to follow the MVC pattern, clarified model–controller–view responsibilities, and improved the flow between Mongoose models and Angular services. I validated choices with Postman tests and by exercising key UI paths (listing, detail, add/edit). I compared alternatives (e.g., API calls vs. direct model queries), favoring designs that improve correctness, maintainability, and testability.

**4) Innovation and modern techniques.**  
I integrated JSON Web Token (JWT) authentication, improved seed scripts and realistic test data, optimized Angular component/service interactions to reduce redundant calls, and organized code for future pagination and filtering. These changes reflect current industry practices rather than one-off coursework.

**5) Security mindset.**  
I implemented secure authentication (hashed passwords, JWT issuance/verification, and protected routes), centralized error handling to avoid leaking stack traces, added input validation at the API boundary, and reviewed dependencies for issues. I documented configuration and environment handling to keep secrets out of source control.

## Artifact Overview (Original vs. Enhanced)
**Original artifact.**  
The original Travlr project was a baseline Express/Angular application with minimal authentication and limited data paths. It provided a clean starting point to demonstrate growth.

**Enhanced artifact (capstone).**  
- **Enhancement 1 – Software Design & Engineering:** Refactored Express controllers, aligned code with MVC, added robust error handling/logging, improved environment configuration, and updated data seeding.  
- **Enhancement 2 – Algorithms & Data Structures:** Streamlined Angular service/component state and data flow to remove redundant requests, clarified list/detail/edit patterns, and prepared the UI logic for scalable features.  
- **Enhancement 3 – Databases:** Strengthened Mongoose models and queries, verified CRUD paths with Postman, ensured the front end accurately reflects database changes, and cleaned up schema registration to avoid runtime issues.

## Impact and Reflection
These improvements increased reliability (fewer failure modes due to centralized error handling), security (JWT-protected routes and validated inputs), and maintainability (clear separation of concerns and service abstractions). Working iteratively with branches, commits, and releases gave me a realistic rhythm for planning, implementing, and documenting changes. I’m more confident reading unfamiliar code, isolating problems, and shipping small, testable increments.

## Next Steps
Short term, I plan to add automated tests (Jest for Angular and supertest for the API), CI checks on pull requests, and role-based authorization. Longer term, I want to deploy to a cloud host with environment-specific configs and monitoring, and expand my portfolio with an additional game prototype to showcase breadth alongside the Travlr web app.

## Conclusion
My ePortfolio shows measurable growth from an unrefined baseline to a secure, maintainable full-stack application with clear documentation. Together, the artifacts, narratives, videos, and repository structure demonstrate mastery across collaboration, communication, design, modern techniques, and security—the core outcomes of the Computer Science program.

---

## Project Index (Read Me First)
- **Enhanced Artifact (Capstone Final):** Branch `final-capstone` (this branch).
- **Original Artifact (pre-enhancement):** In **Releases** → *Original Travlr Project* → `Original_Travlr.zip`.
- **Videos:** In **Releases** → *Project Videos* → `Code_Review.mp4`, `Enhancement_Overview.mp4`.
- **Narratives (in repo):**  
  - `CS499_Enhancement1_Narrative.docx`  
  - `CS499_Enhancement_2_Narrative.docx`  
  - `CS499_Enhancement3_Narrative.docx`
- **Professional Self-Assessment (downloadable copy):** e.g., `docs/CS499_Self_Assessment.docx` or `.pdf`
- **Setup & User Docs (in repo):**  
  - `Setup_Run_Instructions (1).docx`  
  - `User_Guide (1).docx`
- **Module History (CS 465):** Branches `module1` … `module7` show staged progress.

> **Note:** Large assets (videos and the original artifact zip) are in **Releases**.

---

## Repository Structure (Overview)
    /app_api       # Express API, Mongoose models, controllers (MVC)
    /app_server    # Server-side views/controllers (if used)
    /app_admin     # Angular client/admin app (capstone enhancements)
    /public        # Static assets
    /data          # Seed data and scripts
    /bin           # Server bootstrap
    app.js         # Express entrypoint
    package.json   # Dependencies / scripts

**Tech Stack:** Node.js, Express, MongoDB, Mongoose, Angular  
**Security:** JWT auth (register/login, protected routes), password hashing, input validation, centralized error handling

---

## Enhancements Summary (CS 499)
**Enhancement 1 — Software Design & Engineering**  
Refactored Express controllers to align with MVC, added robust error handling/logging, improved environment configuration, and updated seed data.

**Enhancement 2 — Algorithms & Data Structures**  
Optimized Angular service/component state & data flow to reduce redundant API calls and clarify list/detail/edit patterns; prepared for scalable features (e.g., pagination).

**Enhancement 3 — Databases**  
Strengthened Mongoose schemas/queries, verified CRUD with Postman, ensured the front end accurately reflects database changes, and fixed model registration issues.

**Impact:** Improved reliability (fewer failure modes), security (JWT + validation), and maintainability (separation of concerns, cleaner services, clearer data flow).

---

## How to Run (Summary)
> See `Setup_Run_Instructions (1).docx` for full details and screenshots.

1. **Clone & Install**  
    git clone <your-repo-url>  
    cd <repo>  
    npm install

2. **Environment**  
   Create a `.env` with:  
    MONGODB_URI=mongodb://localhost:27017/travlr  
    JWT_SECRET=change_this_secret  
    PORT=3000

3. **Seed Data (if provided)**  
    npm run seed

4. **Start API**  
    npm start

5. **Angular Client (if separate)**  
    cd app_admin  
    npm install  
    npm run start

---

## How This Meets CS 499 Criteria
- **Self-Assessment visible first** (this section at top) and downloadable copy included.
- **Original & Enhanced Artifacts provided:** Original in **Releases** (`Original_Travlr.zip`), enhanced code in `final-capstone`.
- **Code Review Video & Enhancement Overview Video:** In **Releases** (*Project Videos*).
- **Narratives:** Three enhancement narratives included in the repo root.
- **Cohesive ePortfolio:** README serves as the landing page; branches and releases show history and provenance.

---

## Future Work
- Add automated tests (Jest for Angular, supertest for API) and CI checks on pull requests.
- Role-based authorization and richer validation.
- Cloud deployment with environment-specific configs and monitoring.

---

## Credits
Project by **Zack Good**  
Coursework: CS 465 (Full Stack Development) and CS 499 (Capstone)
