import express from "express";
import mysql from "mysql2";
import cors from "cors";

const signup = express.Router(); // Create a new instance of Router

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  // password: "password",
  database: "miniproject",
});

signup.get("/", (req, res) => {
  res.json("hello this is the signup backend");
});

signup.post("/signup", (req, res) => {
  const { username, email, phoneNumber, password } = req.body;
  const q =
    "INSERT INTO users(`username`,`email`,`password`,`phone_no`) VALUES (?, ?, ?, ?)";
  const values = [username, email, password, phoneNumber];
  db.query(q, values, (err, data) => {
    if (err) return res.json(err);
    return res.json({ redirectTo: "http://localhost:5173/" });
  });
});

export default signup; // Export the router instance
