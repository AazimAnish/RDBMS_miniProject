import express, { urlencoded } from "express";
import cors from "cors";
import signup from "./signup.js"; // Import the signu router
import login from "./login.js";
import createCircle from "./create_circle.js"; // Import the createCircle router
import getCircle from "./get_circle.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


import cookieParser from "cookie-parser";
import getUserCircle from "./get_user_circle.js";
import circle_resources from "./circle_resources.js";
import leaveCircle from "./leave_circle.js";
const app = express();
// app.use(cors()); // Add CORS middleware
// Use cookie-parser middleware to parse cookies from incoming requests
app.options("*", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.sendStatus(200); // Respond with a status code 200 to indicate preflight success
});

app.use(cookieParser());
app.use(express.urlencoded())
// Add middleware and other configurations here

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'DELETE'],
    credentials: true
  })
);
app.use(express.json()); // Add JSON parsing middleware
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  // res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

// Routes
// app.get("/setcookie", (req, res) => {
//   res.cookie(`Cookie token name`, `encrypted cookie string Value`);
//   res.send("Cookie have been saved successfully");
// });
app.use(signup); // Mount the signup routes
app.use("/login", login);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/create_circle", createCircle);
app.use("/get_circles", getCircle);
app.use("/get_user_circle", getUserCircle);
app.use("/circle_resources", circle_resources);
app.use("/leave_circle", leaveCircle);
// Start the server
app.listen(8800, () => {
  console.log("Connected to backend");
});
