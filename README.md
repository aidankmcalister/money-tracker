# Money Tracker - Full Stack Application

Money Tracker is a full-stack web application that helps you manage your finances. It consists of a backend API powered by MongoDB to store financial data in the `/api` directory and a front-end interface in the root folder built using React to visualize and interact with the data. With Money Tracker, you can easily track your income, expenses, and financial transactions.

## Features

- **Dashboard**: View an overview of your financial transactions, including your current balance.

- **Income and Expenses**: Record your income and expenses with details and categories.

- **Transaction History**: See a history of all your financial transactions.

- **Edit and Delete**: Easily edit or delete transactions when needed.

- **Monthly Summaries**: Get monthly summaries of your financial activities.

- **Categories**: Categorize your transactions for better organization.

## Technologies Used

- **Front-end**: Built using React, a popular JavaScript library for building user interfaces.

- **Back-end**: The server is powered by Node.js and Express, providing RESTful API endpoints for the front-end in the `/api` directory.

- **Database**: MongoDB is used to store and manage financial data.

## Screenshots

### Front-end

![Money Tracker Front-end](front-end-screenshot.png)

This screenshot showcases the user-friendly front-end interface, providing an intuitive way to input and view your financial transactions.

### Server

![Money Tracker Server](server-screenshot.png)

The server-side code is built with Node.js and Express, handling API requests and database interactions in the `/api` directory. It serves as the backbone of the application, ensuring data retrieval and storage.

## Getting Started

To run Money Tracker locally, follow these steps:

1. **Clone the Repository**: Clone this repository to your local machine.

2. **Front-end Setup**: Navigate to the root folder and install the necessary front-end dependencies.

3. **Back-end Setup**: Navigate to the `/api` directory and install the required server dependencies.

4. **Database Configuration**: Ensure you have MongoDB installed and running. Update the database connection configuration in the `/api/config/db.js` file.

5. **Start the Server**: Start the server from the `/api` directory.

6. **Start the Front-end**: In the root folder, start the React app.

7. **Access the Application**: Open your web browser and go to [http://localhost:3000](http://localhost:3000) to access the Money Tracker application.
