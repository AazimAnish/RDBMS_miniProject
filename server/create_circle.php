<?php
//session start
session_start();
// Allow requests from http://localhost:5173
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');


// Retrieve the form data
$circleName = $_POST['circle_name'];
$description = $_POST['description'];
$creationDate = $_POST['creation_date'];
$maxParticipants = $_POST['max_participants'];

// Create a database connection and insert the data
include 'db_connection.php';
include 'login.php';

//Get user id
$userID = $_SESSION['user_id'];

// Prepare the SQL statement with placeholders
$sql = "INSERT INTO learningcircles(creator_id, circle_name, description, creation_date, max_participants)
        VALUES ('$userID', '$circleName', '$description', '$creationDate', '$maxParticipants')";

$stmt = $conn->prepare($sql);

// Bind the parameters and execute the statement
$stmt->bind_param("issss", $userID, $circleName, $description, $creationDate, $maxParticipants);
$result = $stmt->execute();


if (!$result) {
    $response = array('error' => 'Failed to execute statement');
    echo json_encode($response);
    exit;
}

// Check if the insertion was successful
if ($stmt->affected_rows > 0) {
    // Return a success response to the client
    $response = array('message' => 'Circle created successfully');
    echo json_encode($response);
} else {
    // Return an error response to the client
    $response = array('error' => 'Failed to create circle');
    echo json_encode($response);
}

// Close the statement and the database connection
$stmt->close();
$conn->close();
?>
