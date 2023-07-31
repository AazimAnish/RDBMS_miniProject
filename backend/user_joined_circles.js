import express from "express";
import mysql from "mysql2";
import cookieParser from "cookie-parser";

const userJoinedCircles = express.Router();
userJoinedCircles.use(cookieParser());

userJoinedCircles.get("/", async (req, res) => {
  const { user_id } = req.cookies; // Assuming you have the user_id stored in cookies

  try {
    // Connect to your MySQL database using the promise-based version
    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "password",
      database: "miniproject",
    });
    // Fetch circles that the user has joined from the database
    const query = `
      SELECT learningcircles.*
      FROM learningcircles
      INNER JOIN circleparticipants ON learningcircles.circle_id = circleparticipants.circle_id
      WHERE circleparticipants.user_id = ?
    `;
    connection.query(query, [user_id], (error, results) => {
      if (error) {
        console.error("Error fetching user's joined circles:", error);
        res.status(500).json({ error: "An internal server error occurred" });
      } else {
        // console.log("userjoinedcircles", results);
        res.status(200).json(results);
      }
    });

    // Close the connection
    connection.end();
  } catch (error) {
    console.error("Error fetching user's joined circles:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default userJoinedCircles;
