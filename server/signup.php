
<?php
// Create a connection to the database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "miniproject";

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check if the connection was successful
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Get the user data from the form
$user = $_POST['user'];
$email = $_POST['email'];
$phoneno = $_POST['phoneno'];
$pass = $_POST['pass'];

// Save the user data to the database
$sql = "INSERT INTO users(username,password,email,phone_no) VALUES ('$user','$pass','$email','$phoneno')";

if (mysqli_query($conn, $sql)) {
    header("Location: http://localhost:5173/");
    exit();
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>