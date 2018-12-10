<?php
session_start();
unset($_SESSION['user_id']);
unset($_SESSION['username']);
session_destroy(); 
$home_url = 'http://project/lab_8_2(2)/home.php';
header('Location: ' . $home_url);
?>