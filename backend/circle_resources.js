import express from "express";
import mysql from "mysql2";
import cookieParser from "cookie-parser";
import multer from "multer";
import path from "path";

const circle_resources = express.Router();
circle_resources.use(express.json());
circle_resources.use(cookieParser());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "miniproject",
});

// Configure multer to store uploaded files in the "uploads" directory
const storage = multer.diskStorage({
  destination: "./resources",
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

// POST request to handle resource creation with file upload
circle_resources.post("/", upload.single("file"), (req, res) => {
  const { resource_name, description, resource_type } = req.body;
  const upload_date = new Date().toISOString().slice(0, 19).replace("T", " ");
  const uploader_id = req.cookies.user_id || null; // If user_id is not available in cookies, set it to null

  // Check if user is authenticated (user_id is available in the cookie)
  if (!uploader_id) {

    return res.status(401).json({ error: "User not authenticated" });
  }

  // Check if the file is uploaded
  const file_url = req.file ? req.file.filename : null;

  // Insert the resource data into the database
  const q =
    "INSERT INTO circleresources (resource_name, file_url, description, upload_date, uploader_id, resource_type) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(
    q,
    [resource_name, file_url, description, upload_date, uploader_id, resource_type],
    (err, result) => {
      if (err) {
        console.log("hi there");
        return res.status(500).json({ error: err.message });
      }

      return res.json({
        success: true,
        message: "Resource created successfully",
        resource_id: result.insertId,
      });
    }
  );
});


export default circle_resources;