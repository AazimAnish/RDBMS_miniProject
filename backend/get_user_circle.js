import express from "express";
import mysql from "mysql2";
import cookieParser from "cookie-parser";

const getUserCircle = express.Router();
getUserCircle.use(cookieParser());

// Endpoint to fetch circles that the user has joined
getUserCircle.get("/", async (req, res) => {
  try {
    // Connect to your MySQL database using the promise-based version
    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "password",
      database: "miniproject",
    });

    // Promisify the connection query method
    const queryAsync = (query, values) => {
      return new Promise((resolve, reject) => {
        connection.query(query, values, (err, result) => {
          if (err) reject(err);
          else resolve(result);
        });
      });
    };

    // Fetch circles from the database using async/await
    const user_id = req.cookies.user_id;
    // console.log(user_id);

    // Check if user is authenticated (user_id is available in the cookie)
    if (!user_id) {
      return res.status(401).json({ error: "User not authenticated" });
    }

    // Fetch the circles that the user has joined from the database
    const getCirclesQuery = `
      SELECT learningcircles.* 
      FROM learningcircles 
      JOIN circleparticipants ON learningcircles.circle_id = circleparticipants.circle_id 
      WHERE circleparticipants.user_id = ?
    `;

    const result = await queryAsync(getCirclesQuery, [user_id]);

    // Send the fetched circles as the response
    return res.json({ success: true, circles: result });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

export default getUserCircle;
