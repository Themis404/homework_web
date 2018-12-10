<?php
unset($_COOKIE['user_id']);
unset($_COOKIE['username']);
setcookie('user_id', '', -1, '');
setcookie('username', '', -1, '');
$home_url = 'http://project/lab_8_2/home.php';
header('Location: ' . $home_url);
?>