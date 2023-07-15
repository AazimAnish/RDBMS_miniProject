import express from "express";
import cors from "cors";
import signup from "./signup.js"; // Import the signu router
import login from "./login.js";
import createCircle from "./create_circle.js"; // Import the createCircle router

import cookieParser from "cookie-parser";
const app = express();
// Use cookie-parser middleware to parse cookies from incoming requests
app.use(cookieParser());

// Add middleware and other configurations here

app.use(cors()); // Add CORS middleware
app.use(express.json()); // Add JSON parsing middleware

// Routes
app.use(signup); // Mount the signup routes
app.use("/login", login);
app.use("/create_circle", createCircle);

// Start the server
app.listen(8800, () => {
  console.log("Connected to backend");
});
