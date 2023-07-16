import express from "express";
import mysql from "mysql2";
import cookieParser from "cookie-parser"; // Import the cookie-parser middleware
const login = express.Router();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "miniproject",
});
login.use(cookieParser());

// POST request to handle login
login.post("/", (req, res) => {
  const { username, password } = req.body;

  // Fetch user data from the database
  const q = "SELECT * FROM users WHERE username = ? AND password = ?";
  db.query(q, [username, password], (err, data) => {
    if (err) {
      return res.json({ success: false, error: err.message });
    }

    if (data.length === 1) {
      // User authenticated successfully
      // Set the user_id as a cookie
      // Set the user_id as a cookie
      const user_id = data[0].user_id;
      res.cookie("user_id", user_id, { httpOnly: true });
      console.log(user_id);

      return res.json({ success: true, user: data[0] });
    } else {
      // User login failed
      return res.json({
        success: false,
        error: "Invalid username or password",
      });
    }
  });
});

export default login;
