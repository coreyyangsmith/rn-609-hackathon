import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import twilio from "twilio";

// Custom modules, controllers and middleware imports
import Database from "./modules/Database.mjs";
import * as authController from "./controllers/authController.mjs";
import * as userController from "./controllers/userController.mjs";
import { notFound } from "./middleware/errorHandler.mjs";

// Load environment variables
dotenv.config({path: './.env'});
const port = process.env.PORT || 3001;

// Twilio configuration
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// Initialize and configure the server
const app = express();
app.use(cors());
app.use(express.json());

// Create database connection
Database.connect();

// Authentication routes
app.post("/user/register", authController.register);
app.post("/user/login", authController.login);
// Route handler to send SMS
app.post('/send-sms', async (req, res) => {
    const { to, body } = req.body;

    try {
        const message = await client.messages.create({
            body: body,
            from: process.env.TWILIO_PHONE_NUMBER, // Use your Twilio phone number
            to: to
        });

        console.log('SMS message sent:', message.sid);
        res.json({ success: true, message: 'SMS message sent successfully' });
    } catch (error) {
        console.error('Error sending SMS:', error);
        res.status(500).json({ success: false, message: 'Failed to send SMS' });
    }
});

// Data Routes
app.get("/getUsers", userController.getUsers);

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