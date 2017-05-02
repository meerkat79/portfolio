<?php

$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];
$selection = $_POST['selection'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$to = 'rvlglobe@gmail.com';
$subject = 'Message from irudi.me';
$headers = 'From: webmaster@irudi.me' . '\r\n';

mail($to, $subject, $message, 'From: ' . $name, $headers);
echo 'Thank you for your message. I will aim to get back in touch as soon as possible.';



?>