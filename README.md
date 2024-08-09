# TITAN Fullstack Assignment

This is a Node.js application. The application provides an API to fetch random photos from Unsplash and handle user orders with MongoDB as the database.

## Prerequisites

- Node.js (which includes npm)

## Installation

**Clone the repository:**

1. git clone https://github.com/shellyEldman/titan-fullstack-assignment.git
2. cd titan-fullstack-assignment
3. npm install

**Set up environment variables**

1. Create a `.env` file in the root directory.
2. Add the following variables to the `.env` file:

   ```env
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/titan_fullstack_db
   UNSPLASH_ACCESS_KEY=your_unsplash_access_key
   ```

**Running the App**

1. npm run dev

## Usage

The API provides endpoints to fetch random photos from Unsplash, create orders, and retrieve orders by user.

**API Endpoints:**

1. Fetch Photos: `GET /api/photos`. add count parameter.
2. Create Order: `POST /api/orders`. Creates a new order and stores it in the database. Add Request Body.
3. Get Orders by User: `GET /api/orders/user/:user`. Retrieves a list of all orders placed by a specific user.
