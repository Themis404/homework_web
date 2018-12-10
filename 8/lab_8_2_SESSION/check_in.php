<?php
    $db = mysqli_connect('localhost', 'root', '', 'lab_8');
    if(isset($_POST['submit'])){
        $username = mysqli_real_escape_string($db, trim($_POST['username']));
        $password1 = mysqli_real_escape_string($db, trim($_POST['password1']));
        $password2 = mysqli_real_escape_string($db, trim($_POST['password2']));
        if((!empty($username)) && (!empty($password1)) && (!empty($password2)) && ($password1 == $password2)){
            $query = "SELECT * FROM `singup` WHERE username = '$username'";
            $data = mysqli_query($db, $query);
            if(mysqli_num_rows($data) == 0){
                $query = "INSERT INTO `singup` (username, password) VALUES ('$username', SHA('$password1'))";
                mysqli_query($db, $query);
                mysqli_close($db);
                $home_url = 'http://project/lab_8_2(2)/home.php';
                header('Location: ' . $home_url);
            }
            else{
                echo 'Такой пользователь уже есть!';
            }
        }
    }
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="second.css" />
    <script src="main.js"></script>
</head>
<body class='checkin'>
    <form action='<?php echo $_SERVER['PHP_SELF']; ?>' method='POST'>
        <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
            <input id="email" type="text" class="form-control" name="username" placeholder="Email">
        </div>
        <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
            <input id="password1" type="password" class="form-control" name="password1" placeholder="Password">
        </div>
        <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
            <input id="password2" type="password" class="form-control" name="password2" placeholder="Repeat password">
        </div>
        <input type='submit' name='submit' class="btn btn-primary" /><br/>
    </form>
</body>
</html>

