import express from "express";
import mysql from "mysql2";

const updateMeeting = express.Router();

updateMeeting.post("/:circle_id/:meeting_id", async (req, res) => {
  const circleId = req.params.circle_id;
  const meetingId = req.params.meeting_id;
  const { meetDate, meetTime } = req.body;

  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "password",
      database: "miniproject",
    });

    // Update the meeting date and time in the database based on the circle_id and meeting_id
    const updateMeetingQuery =
      "UPDATE meetings SET meeting_date = ?, meeting_time = ? WHERE circle_id = ? AND meeting_id = ?";
    await connection.execute(updateMeetingQuery, [
      meetDate,
      meetTime,
      circleId,
      meetingId,
    ]);

    // Close the connection
    connection.end();

    res.status(200).json({ message: "Meeting date updated successfully" });
  } catch (error) {
    console.error("Error updating meeting date:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default updateMeeting;
