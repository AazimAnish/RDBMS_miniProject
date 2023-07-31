import express from "express";
import mysql from "mysql2/promise"; // Use the promise-based version of mysql2
import cookieParser from "cookie-parser";

const joinCircle = express.Router();
joinCircle.use(cookieParser());

joinCircle.post("/", async (req, res) => {
  const { circle_id } = req.body;
  const { user_id } = req.cookies; // Assuming you have the user_id stored in cookies
  // console.log("circleid", circle_id);
  // console.log("userid", user_id);
  try {
    // Connect to your MySQL database using the promise-based version
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "password",
      database: "miniproject",
    });

    // Check if the user is already a participant in the circle
    const isParticipantQuery =
      "SELECT * FROM circleparticipants WHERE circle_id = ? AND user_id = ?";
    const [participantRows] = await connection.execute(isParticipantQuery, [
      circle_id,
      user_id,
    ]);

    if (participantRows.length > 0) {
      // The user is already a participant in the circle
      res.status(409).json({ message: "User already joined this circle" });
    } else {
      const getUserQuery = "SELECT username FROM users WHERE user_id = ?";
      const [userRows] = await connection.execute(getUserQuery, [user_id]);

      if (userRows.length > 0) {
        const participant_name = userRows[0].username; // Corrected property name to "username"
        // Add the user as a participant in the circle
        const role = "member";
        const addParticipantQuery =
          "INSERT INTO circleparticipants (circle_id, user_id, participant_name, role) VALUES (?, ?, ?, ?)";
        await connection.execute(addParticipantQuery, [
          circle_id,
          user_id,
          participant_name,
          role,
        ]);
      }

      res.status(200).json({ message: "User joined the circle successfully" });
    }

    // Close the connection
    connection.end();
  } catch (error) {
    console.error("Error joining circle:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default joinCircle;
