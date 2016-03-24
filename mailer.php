
<?php


$to = "publicart.tours@gmail.com";
$subject = "Message from your Public Art Walking Tours website";
$name_field = $_POST['firstname'];
$surname_field = $_POST['surname'];
$email_field = $_POST['email'];
$message = $_POST['message'];
$fullname = $name_field . " " . $surname_field;

$message = wordwrap($message,70);

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

$headers .= "From: " .$email_field. "\r\n";
$headers .= 'Cc: maria.m.hynes@gmail.com' . "\r\n";

$body_message = "
			<html>
			<head>
			<title>Message from your Public Art Walking Tours website</title>
			</head>
			<body>
			<p>A visitor to your website used the Contact Form to send the following message...</p>
			<table>
			<tr>
			<td>Name:</td>
			<td>".$fullname."</td>
			</tr>
			<tr>
			<td>Email:</td>
			<td>".$email_field."</td>
			</tr>
			<tr>
			<td>Message:</td>
			<td>".$message."</td>
			</tr>
			</table>
			</body>
			</html>";



echo "Data has been submitted to $to!";
mail($to, $subject, $body_message, $headers);


?>
