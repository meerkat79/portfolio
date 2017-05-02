<?php

$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];
$selection = $_POST['selection'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$to = 'rvlglobe@gmail.com';
$subject = 'Message from irudi.me';

mail($to, $subject, $message, 'From: ' . $name);
echo 'Your message has been sent';



?>