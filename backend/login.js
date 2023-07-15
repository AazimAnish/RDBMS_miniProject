import express from "express";
import mysql from "mysql2";
const authentication = express.Router();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "miniproject",
});

// POST request to handle login
authentication.post("/", (req, res) => {
  const { username, password } = req.body;

  // Fetch user data from the database
  const q = "SELECT * FROM users WHERE username = ? AND password = ?";
  db.query(q, [username, password], (err, data) => {
    if (err) {
      return res.json({ success: false, error: err.message });
    }

    if (data.length === 1) {
      // User authenticated successfully
      return res.json({ success: true, user: data[0] });
    } else {
      // User authentication failed
      return res.json({
        success: false,
        error: "Invalid username or password",
      });
    }
  });
});

export default authentication;
