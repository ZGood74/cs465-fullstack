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


