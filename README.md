# CS - 465
# Travlr Getaways – Module 3
Full Stack Web Development – CS 465  
Author: Zack Good (ZGood74)  
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


