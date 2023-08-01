import express from "express";
import mysql from "mysql2";
import cookieParser from "cookie-parser";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const getCircle = express.Router();
getCircle.use(cookieParser());

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "password",
//   database: "miniproject",
// });
// getCircle.use("/uploads", express.static(path.join(__dirname, "../uploads")));
// Endpoint to fetch uploaded circles
getCircle.get("/", async (req, res) => {
  try {
    // Connect to your MySQL database using the promise-based version
    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      // password: "password",
      database: "miniproject",
    });

    // Fetch circles from the database using async/
    // const rows = connection.query("SELECT * FROM learningcircles");
    connection.query("SELECT * FROM learningcircles ", (error, results) => {
      if (error) {
        console.error("Error occurred while fetching sponregs:", error);
        res.status(500).json({ error: "An internal server error occurred" });
      } else {
        res.status(200).json(results);
        // console.log("spon1", results);
      }
    });
    // console.log(rows);

    // Close the connection
    connection.end();

    // Send the circles as the response
    // res.json(rows);
  } catch (error) {
    console.error("Error fetching circles:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default getCircle;
