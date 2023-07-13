<?php
// Database credentials
$hostname = 'localhost';
$username = 'root';
$password = '';
$database = 'miniproject';

// Create a new MySQLi connection
$mysqli = new mysqli($hostname, $username, $password, $database);

// Check for connection errors
if ($mysqli->connect_errno) {
    die("Failed to connect to MySQL: " . $mysqli->connect_error);
}
?>
