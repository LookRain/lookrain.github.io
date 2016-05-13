
function myFunction() {
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;

// Returns successful data submission message when the entered information is stored in database.
if (name == '' || email == '') {
alert("Please Fill All Fields");
} else {
// AJAX code to submit form.
$.ajax({
type: "POST",
url: "php/form.php",
data: {
	name: name,
	email: email,
},
success: function(html) {
alert(html);
}
});
}
return false;
}