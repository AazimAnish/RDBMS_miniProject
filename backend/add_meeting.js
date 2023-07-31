import express from "express";
import mysql from "mysql2";
import cookieParser from "cookie-parser";

const addMeeting = express.Router();
addMeeting.use(cookieParser());

addMeeting.post("/", async (req, res) => {
  try {
    const meeting_date = req.body.meetDate;
    const meeting_time = req.body.meetTime;
    const location = req.body.location;
    const meeting_agenda = req.body.agenda;
    const circle_id = req.body.circleId;
    const user_id = req.cookies.user_id;

    // Check if user is authenticated (user_id is available in the cookie)
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

    // Check if the user is the lead of the circle
    const checkLeadQuery = `
      SELECT * FROM circleparticipants 
      WHERE circle_id = ? AND user_id = ? AND role = 'lead'
    `;

    const isLead = await queryAsync(checkLeadQuery, [circle_id, user_id]);

    if (!isLead || isLead.length === 0) {
      return res
        .status(403)
        .json({ error: "Only the lead can add meetings to the circle" });
    }

    // Extract other meeting details from the FormData

    // Insert the meeting into the meetings table
    const insertMeetingQuery = `
      INSERT INTO circlemeetings (circle_id, meeting_date, meeting_time, location, meeting_agenda)
      VALUES (?, ?, ?, ?, ?)
    `;

    await queryAsync(insertMeetingQuery, [
      circle_id,
      meeting_date,
      meeting_time,
      location,
      meeting_agenda,
    ]);

    return res.json({
      success: true,
      message: "Meeting added successfully",
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

export default addMeeting;
