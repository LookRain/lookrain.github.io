<?php

$con = mysqli_connect("localhost", "travbook_luyu", "luyu3514267", "travbook_test"); // Selecting Database
if (mysqli_connect_errno()){ // are we connected properly?
	echo 'failed to connect'.mysqli_connect_errno();
}
//Fetching Values from URL

$name1=$_POST['name'];
$email1=$_POST['email'];

//Insert query


$sql = 'INSERT INTO signup_form (name, email) VALUES ("$name1", "$email1")';
if (mysqli_query($con, $sql)) {
	echo "inserted";
} else {
	echo "failed to insert";
}
mysqli_close($con);

?>