import express from "express";
import cors from "cors";
import signup from "./signup.js"; // Import the signu router
import login from "./login.js";
import createCircle from "./create_circle.js"; // Import the createCircle router
import getCircle from "./get_circle.js";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import getUserCircle from "./get_user_circle.js";
import circle_resources from "./circle_resources.js";
import leaveCircle from "./leave_circle.js";
import addMeeting from "./add_meeting.js";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();

app.options("*", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.sendStatus(200);
});

app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true })); // Set specific origin and enable credentials
app.use(express.json());

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
app.use("/add_meeting", addMeeting);
// Start the server
app.listen(8800, () => {
  console.log("Connected to backend");
});
