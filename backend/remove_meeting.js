import express from "express";
import mysql from "mysql2";
const removeMeeting = express.Router();

removeMeeting.post("/:circle_id/:meeting_id", async (req, res) => {
  const circleId = req.params.circle_id;
  const meetingId = req.params.meeting_id;

  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "password",
      database: "miniproject",
    });

    // Delete the meeting from the database based on the circle_id and meeting_id
    const deleteMeetingQuery =
      "DELETE FROM circlemeetings WHERE circle_id = ? AND meeting_id = ?";
    await connection.execute(deleteMeetingQuery, [circleId, meetingId]);

    // Close the connection
    connection.end();

    res.status(200).json({ message: "Meeting removed successfully" });
  } catch (error) {
    console.error("Error removing meeting:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default removeMeeting;
