import express from "express";
import dotenv from "dotenv";

// Importing custom modules, controllers and middleware
import Database from "./modules/Database.mjs";
import * as userController from "./controllers/userController.mjs";
import { notFound } from "./middleware/errorHandler.mjs";

// Load environment variables from config.env file
dotenv.config({ path: './config.env' });
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

// Create database connection
Database.connect();

// Routes
app.get("/", (req, res) => { res.send("Welcome to the backend server"); });
app.get("/getUsers", userController.getUsers);

// Not found route
app.use(notFound);

// Start the server
const server =app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});

// Close database connection when server stops
process.on('SIGINT', () => {
    console.log('Received SIGINT. Shutting down gracefully.');
    Database.disconnect();
    server.close(() => {
        console.log('Server closed.');
        process.exit(0);
    });
});