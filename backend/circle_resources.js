import express from "express";
import mysql from "mysql2";
import cookieParser from "cookie-parser";
import multer from "multer";
import path from "path";
import cors from "cors";
import fs from 'fs'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const circle_resources = express.Router();
circle_resources.use(express.json());
circle_resources.use(cookieParser());

// Import and use the 'cors' middleware in your server code
// const app = express();

// Enable CORS with appropriate options
// circle_resources.use(
//   cors({
//     origin: '*',
//     credentials: true,
//   })
// );

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

// GET request to fetch all resources from the database
circle_resources.get("/", (req, res) => {
  const query = "SELECT * FROM circleresources";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching resources from the database:", err);
      return res.status(500).json({ error: "Failed to fetch resources." });
    }
    return res.json(results);
  });
});

// circle_resources.delete("/:resourceId/:cookieId", (req, res) => {
  circle_resources.delete("/:resourceId", (req, res) => {
  const resourceId = req.params.resourceId;

  // Check if user is authenticated (user_id is available in the cookie)
  const uploader_id = req.cookies.user_id || NULL;
  
  if (!uploader_id) {
    console.log(uploader_id)
    return res.status(401).json({ error: "User not authenticated" });
  }

  // First, retrieve the file_url of the resource from the database
  const selectQuery = "SELECT file_url FROM circleresources WHERE resource_id = ?";
  db.query(selectQuery, [resourceId], (err, result) => {
    if (err) {
      console.log('this is called')
      return res.status(500).json({ error: "Resource deletion failed" });
    }

    const file_url = result.length > 0 ? result[0].file_url : null;

    if (!file_url) {
      // Resource with the given resourceId not found
      return res.status(404).json({ error: "Resource not found" });
    }

    // Delete the resource from the database
    const deleteQuery = "DELETE FROM circleresources WHERE resource_id = ?";
    db.query(deleteQuery, [resourceId], (err, result) => {
      if (err) {
        console.log('this is called 2')
        return res.status(500).json({ error: "Resource deletion failed" });
      }

      // Delete the actual file from the server's file system
      if (file_url) {
        const filePath = path.join(__dirname, "./resources", file_url);
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error("Error deleting file:", err);
            return res.status(500).json({ error: "Resource deletion failed" });
          }

          return res.json({ success: true, message: "Resource deleted successfully" });
        });
      } else {
        return res.json({ success: true, message: "Resource deleted successfully" });
      }
    });
  });
});




export default circle_resources;