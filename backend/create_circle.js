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
  const user_id = req.cookies.user_id;
  console.log(user_id);
  // Check if user is authenticated (user_id is available in the cookie)
  if (!user_id) {
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
      user_id,
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

      // Circle created successfully
      return res.json({
        message: "Circle created successfully",
        circle_id: result.insertId,
      });
    }
  );
});

export default createCircle;
