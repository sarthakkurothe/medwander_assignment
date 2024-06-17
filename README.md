# Dynamic Form Application

## Overview

This is a dynamic form web application built using the SQL, Express, React, and Node.js (SERN) stack. The application allows users to fill out forms with validation, store form data in a SQL database, and synchronize data with an online JSON Bin.

## Features

- Dynamic forms with validation for name, country code, and phone number.
- Forms are differentiated as Form A and Form B.
- Data synchronization with an online JSON Bin.
- Data persistence using local storage to avoid repeated data entry.
- Attractive and responsive user interface.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14.x or higher)
- npm (v6.x or higher)
- MySQL database

## Installation Steps

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/dynamic-form-app.git
   cd dynamic-form-app
   ```
   
2. **Backend Setup:**

Navigate to the backend directory and install dependencies:

   ```bash
   cd backend
   npm install
   ```

Create a .env file in the backend directory and add your MySQL and JSON Bin credentials:

Initialize the MySQL database:

   ```bash
   CREATE DATABASE dynamic_forms_db;
   ```

Start the backend server:

   ```bash
   node index.js
   ```

The backend server will run on http://localhost:5000.

3. **Frontend Setup:**

Navigate to the frontend directory and install dependencies:

   ```bash
   cd ../frontend
   npm install
   ```
Start the frontend development server:

   ```bash
   npm start
   ```

The frontend will be available at http://localhost:3000.

### Running the Application

- Start Backend Server:

Ensure your MySQL database is running and start the backend server:

```bash
cd backend
node index.js
```
 
- Start Frontend Server:

In a separate terminal, start the frontend server:

```bash
cd frontend
npm start
```

- Access the Application:

Open your web browser and navigate to http://localhost:3000.

## Functionality

### Dynamic Forms

- The application features two buttons labeled "Form A" and "Form B".
- Clicking either button displays a form with fields for Name, Country Code, and Phone Number.
- The heading of the form dynamically changes to "Form A" or "Form B" based on the button clicked.
 
### Form Validation
- The name field must not be empty and must contain only alphabetic characters.
- The country code must be selected from a predefined list.
- The phone number must be numeric and conform to the format specified by the selected country code.

### Data Synchronization
- The form data is stored in a MySQL database.
- A "Refresh" button on the interface updates an online JSON Bin with new data from the SQL database whenever clicked.

### Additional Features
- Data is saved locally using local storage, so users do not have to re-enter data on subsequent visits.
- The UI is designed to be attractive and responsive for both mobile and desktop views.

## Project Structure

   ```bash
   dynamic-form-app/
├── backend/
│   ├── models/
│   │   └── formModel.js
│   ├── routes/
│   │   └── formRoutes.js
│   ├── .env
│   ├── index.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── FormA.js
│   │   │   ├── FormB.js
│   │   │   └── Form.css
│   │   ├── App.js
│   │   ├── index.js
│   │   └── package.json
└── README.md
   ```



