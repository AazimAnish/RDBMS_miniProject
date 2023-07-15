import express from "express";
import cors from "cors";
import signup from "./signup.js"; // Import the signu router
import authentication from "./login.js";
const app = express();

// Add middleware and other configurations here

app.use(cors()); // Add CORS middleware
app.use(express.json()); // Add JSON parsing middleware

// Routes
app.use(signup); // Mount the signup routes
app.use("/login", authentication);

// Start the server
app.listen(8800, () => {
  console.log("Connected to backend");
});
