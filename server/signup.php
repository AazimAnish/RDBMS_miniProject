
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
$username = $_POST['username'];
$password = $_POST['password'];

// Save the user data to the database
$sql = "INSERT INTO user_info(username, password) VALUES ('$username', '$password')";

if (mysqli_query($conn, $sql)) {
    header("Location: loginback.php");
    exit();
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>