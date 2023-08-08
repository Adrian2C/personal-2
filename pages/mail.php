<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mailheader = "From:".$name."<".$email.">\r\n";

$recipient = "adriancoceres.93@gmail.com";

mail($recipient, $subject, $message, $mailheader) or die("Error!");

echo'

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="../assets/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="reset.css">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container">
        <div class="container__background"></div>
        <div class="container__text">
        <h1>Gracias por contactarse! A la brevedad me contactare con usted!</h1>
        <p class="back"><a href="../index.html">Volver a inicio</a></p>
        </div>
    </div>
</body>

</html>

';

?>