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
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

// Routes
// app.get("/setcookie", (req, res) => {
//   res.cookie(`Cookie token name`, `encrypted cookie string Value`);
//   res.send("Cookie have been saved successfully");
// });
app.use(signup); // Mount the signup routes
app.use("/login", login);
app.use("/create_circle", createCircle);

// Start the server
app.listen(8800, () => {
  console.log("Connected to backend");
});
