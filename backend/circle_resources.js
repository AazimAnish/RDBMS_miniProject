import express from "express";
import mysql from "mysql2";
import cookieParser from "cookie-parser";
import multer from "multer";
import path from "path";

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "miniproject",
  });

  