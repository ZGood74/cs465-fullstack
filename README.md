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
