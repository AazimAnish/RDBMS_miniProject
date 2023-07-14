<?php
// Database credentials
$hostname = 'localhost';
$username = 'root';
$password = '';
$database = 'miniproject';

// Create a new MySQLi connection
$conn = new mysqli($hostname, $username, $password, $database);

// Check for connection errors
if ($conn->connect_errno) {
    die("Failed to connect to MySQL: " . $conn->connect_error);
}
?>
