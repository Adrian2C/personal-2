<?php

// Get the form data
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

// Send an email
$to = 'adriancoceres.93@gmail.com';
$subject = 'Mensaje de Contacto ACWD';
$body = "Nombre: $name\nEmail: $email\Telefono: $phone\nMensaje: \n $message";

mail($to, $subject, $body);
echo'mensaje enviado correctamente';
?>