# Travlr Full Stack Application

CS-465 Travlr Getaways full stack web application built using the MEAN stack.

---

## Overview
This project is a full stack web application developed using MongoDB, Express, Angular, and Node.js (MEAN stack). The application includes both a customer-facing website and an administrative single-page application (SPA). The customer-facing site allows users to browse travel packages, while the admin SPA enables authenticated users to manage trips through secure CRUD operations.

---

## Tech Stack
- **Frontend (Customer Site):** Express, Handlebars (HBS)
- **Frontend (Admin SPA):** Angular
- **Backend:** Node.js, Express
- **Database:** MongoDB with Mongoose
- **Authentication:** JSON Web Tokens (JWT)

---

## Architecture

### Frontend Comparison

**Express + Handlebars (HBS):**
- Server-side rendered HTML
- Full page reloads between routes
- Efficient for simple content delivery and SEO-friendly pages

**Angular SPA:**
- Client-side rendering
- Dynamic UI updates without page reloads
- Designed for interactive admin functionality

**Key Difference:**  
The Express frontend focuses on simplicity and content delivery, while the Angular SPA provides a dynamic, application-like experience for managing data.

---

### Why MongoDB (NoSQL)
MongoDB was selected because:
- Stores data in flexible, JSON-like documents
- Integrates naturally with JavaScript applications
- Supports scalable and evolving data structures
- Works seamlessly with Mongoose for schema modeling

---

## Functionality

### JSON vs JavaScript
JSON (JavaScript Object Notation) is a data format used for transmitting data, while JavaScript is a programming language used to execute logic.

**Role in the application:**
- Backend APIs return data as JSON
- Angular consumes JSON to render UI components
- Frontend sends JSON to create/update records

This enables consistent communication between frontend and backend systems.

---

### Refactoring and Reusable Components

Refactoring improved structure and efficiency throughout development:

**Examples:**
- Separation of API routes from MVC routes
- Moving logic into controllers
- Creating a centralized Angular service (`TripDataService`)
- Breaking UI into reusable components (TripList, TripCard, AddTrip, EditTrip)

**Benefits:**
- Reduced code duplication
- Improved maintainability
- Increased scalability
- Consistent UI behavior

---

## Testing

### Methods, Endpoints, and Security

The application uses RESTful API methods:

- **GET** – retrieve data  
- **POST** – create records  
- **PUT** – update records  
- **DELETE** – remove records  

Each endpoint was tested to ensure:
- Accurate data retrieval
- Proper database updates
- Error handling for invalid inputs

### Security Testing
- JWT authentication protects sensitive routes
- Unauthorized requests return `401` responses
- Admin actions require authentication

This demonstrates how security layers impact both API behavior and testing complexity.

---

## Reflection

This course strengthened my understanding of full stack development by integrating frontend, backend, and database concepts into a single application.

Key skills developed:
- Building RESTful APIs with Express
- Designing and managing MongoDB databases
- Implementing authentication using JWT
- Developing dynamic UIs with Angular
- Structuring applications using MVC and component-based design

This project demonstrates my ability to design, build, and manage a full stack application, making me a stronger and more marketable candidate for software engineering and data-focused roles.

---

## Features
- Dynamic trip browsing (customer-facing site)
- Admin SPA with full CRUD functionality
- Secure login with JWT authentication
- MongoDB database integration
- RESTful API architecture
