<?php
 $username = $_POST['user'];
 $password = $_POST['pass'];

 $mysqli = new mysqli("localhost", "root", "", "login_db");
$result = $mysqli->query("select * from user_info where username = '$username' and password = '$password'");
$row = $result->fetch_assoc();
 if(isset($row['username']) == $username && isset( $row['password']) == $password){
    echo "login success";
 } else{
    echo "failed to login";
 }
?>