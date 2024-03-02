import express from "express";
import dotenv from "dotenv";
import cors from "cors";


// Custom modules, controllers and middleware imports
import Database from "./modules/Database.mjs";
import * as userController from "./controllers/userController.mjs";
import { notFound } from "./middleware/errorHandler.mjs";

// Load environment variables
dotenv.config({path: './config.env'});
const port = process.env.PORT || 3001;

// Initialize and configure the server
const app = express();
app.use(cors());
app.use(express.json());

// Create database connection
Database.connect();

// Routes
app.get("/getUsers", userController.getUsers);
app.post("/register", userController.register);
app.post("/login", userController.login);

// Not found route
app.use(notFound);

// Start the server
const server = app.listen(port, () => {
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