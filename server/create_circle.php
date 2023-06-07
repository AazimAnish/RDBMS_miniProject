
<?php
// Create a connection to the database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "login_db";

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check if the connection was successful
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Get the user data from the form
$lead_name = $_POST['lead_name'];
$circle_name = $_POST['circle_name'];
$email = $_POST['email'];
$phone_no= $_POST['phone_no'];
$meet_place = $_POST['meet_place'];
$meet_time = $_POST['meet_time'];

// Save the user data to the database
$sql = "INSERT INTO circle(lead_name, circle_name, email, phone_no, meet_place, meet_time) VALUES ('$lead_name', '$circle_name','$email','$phone_no','$meet_place','$meet_time')";

if (mysqli_query($conn, $sql)) {
    //header("Location: loginback.php");
    echo "circle created";
    exit();
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>