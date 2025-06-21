#CS 465 - Module 7: Authentication and JWT Integration

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


## Course

**CS 465 – Full Stack Development**  
Southern New Hampshire University
