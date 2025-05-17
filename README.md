# CS - 465

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

