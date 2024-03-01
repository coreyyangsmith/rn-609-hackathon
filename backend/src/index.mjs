import express from "express";
import dotenv from "dotenv";

// Importing custom error handler
import { notFound } from "./middleware/errorHandler.mjs";

// Load environment variables from config.env file
dotenv.config({ path: './config.env' });
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

// Welcome route
app.get("/", (req, res) => {
    res.send("Welcome to the backend server");
});

// Not found route
app.use(notFound);

// Error handler future development
// app.use(errorHandler);

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});
