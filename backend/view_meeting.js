import mysql from "mysql2";
import { Router } from "express";
import cookieParser from "cookie-parser";

const viewMeeting = Router();
viewMeeting.use(cookieParser());

viewMeeting.get("/:circle_id", async (req, res) => {
  const { circle_id } = req.params;

  const user_id = req.cookies.user_id;

  try {
    // Connect to your MySQL database using the promise-based version
    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "password",
      database: "miniproject",
    });

    // Fetch circle meetings from the database where the user is present
    connection.query(
      "SELECT * FROM circlemeetings WHERE circle_id = ?",
      [circle_id],
      (error, results) => {
        if (error) {
          console.error(
            "Error occurred while fetching circle meetings:",
            error
          );
          res.status(500).json({ error: "An internal server error occurred" });
        } else {
          res.status(200).json({ meetings: results });
        }
      }
    );
  } catch (error) {
    console.error("Error fetching circle meetings:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default viewMeeting;
