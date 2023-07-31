import express from "express";
import mysql from "mysql2";
import cookieParser from "cookie-parser";

const leaveCircle = express.Router();
leaveCircle.use(cookieParser());

leaveCircle.post("/", async (req, res) => {
  try {
    const { circle_id } = req.body;
    const user_id = req.cookies.user_id;

    if (!user_id) {
      return res.status(401).json({ error: "User not authenticated" });
    }

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

    // Check if the user is already a participant in the circle
    const checkParticipantQuery = `
      SELECT * FROM circleparticipants 
      WHERE circle_id = ? AND user_id = ?
    `;

    const participant = await queryAsync(checkParticipantQuery, [
      circle_id,
      user_id,
    ]);

    if (!participant || participant.length === 0) {
      return res
        .status(404)
        .json({ error: "User is not a participant in the circle" });
    }

    // Remove the user from the circleparticipants table
    const leaveCircleQuery = `
      DELETE FROM circleparticipants 
      WHERE circle_id = ? AND user_id = ?
    `;

    await queryAsync(leaveCircleQuery, [circle_id, user_id]);

    return res.json({
      success: true,
      message: "User left the circle successfully",
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

export default leaveCircle;
