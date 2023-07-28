import express from "express";
import mysql from "mysql2";
import cookieParser from "cookie-parser";
import multer from "multer";
import path from "path";

const createCircle = express.Router();
createCircle.use(cookieParser());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "miniproject",
});

// Configure multer to store uploaded files in the "uploads" directory
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

// POST request to handle circle creation with file upload
createCircle.post("/", upload.single("cover_photo"), (req, res) => {
  const { circle_name, description, max_participants } = req.body;
  const creator_id = req.cookies.user_id;
  console.log(creator_id);
  // Check if user is authenticated (user_id is available in the cookie)
  if (!creator_id) {
    console.log("hi");

    return res.status(401).json({ error: "User not authenticated" });
  }

  const cover_photo = req.file ? req.file.filename : null; // Get the uploaded file name if it exists

  // Get the current date and time as the creation_date
  const creation_date = new Date().toISOString().slice(0, 19).replace("T", " ");

  // Insert the circle data into the database
  const q =
    "INSERT INTO learningcircles (creator_id, circle_name, description, max_participants, cover_photo, creation_date) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(
    q,
    [
      creator_id,
      circle_name,
      description,
      max_participants,
      cover_photo,
      creation_date,
    ],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      // Fetch the circle_id of the recently created row
      const getCircleIdQuery = "SELECT LAST_INSERT_ID() as circle_id";
      db.query(getCircleIdQuery, (err, result) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }
        const circle_id = result[0].circle_id; // Get the circle_id from the query result

        console.log("hi" + circle_id);
        // Retrieve participant_name from the users table based on the creator_id
        const getParticipantNameQuery =
          "SELECT participant_name FROM users WHERE user_id = ?";
        db.query(getParticipantNameQuery, [creator_id], (err, result) => {
          if (err) {
            console.log("hi");
            return res.status(500).json({ error: err.message });
          }

          const participant_name = result[0].participant_name; // Retrieve the participant_name from the query result
          console.log("partic" + participant_name);

          // Now, add the user to "circleparticipants" table
          const userParticipantQuery =
            "INSERT INTO circleparticipants (user_id, circle_id, participant_name, role) VALUES (?, ?, ?, ?)";

          db.query(
            userParticipantQuery,
            [creator_id, circle_id, participant_name, "lead"],
            (err, result) => {
              if (err) {
                return res.status(500).json({ error: err.message });
              }

              return res.json({
                success: true,
                message: "Circle created successfully",
                circle_id: circle_id,
              });
            }
          );
          return res.json({
            success: true,
            message: "recieved participant name successfully",
            participant_name: participant_name,
          });
        });
      });

      return res.json({
        success: true,
        message: "Circle created successfully",
        circle_id: result.insertId,
      });
    }
  );
});

export default createCircle;
