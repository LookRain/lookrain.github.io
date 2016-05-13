<?php

$con = mysqli_connect("localhost", "root", "", "travbook_test"); // Selecting Database
if (mysqli_connect_errno()){ // are we connected properly?
	echo 'failed to connect'.mysqli_connect_errno();
}
//Fetching Values from URL
$name=$_POST['name'];
$email=$_POST['email'];

//Insert query


$sql = "INSERT INTO form_element (name, email) VALUES ($name, $email)";
if (mysqli_query($con, $sql)) {
	echo "inserted";
} else {
	echo "failed to insert";
}
mysqli_close($con);

?>