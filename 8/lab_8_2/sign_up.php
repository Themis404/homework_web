<?php
    $db = mysqli_connect('localhost', 'root', '', 'lab_8');
    if(!isset($_COOKIE['user_id'])){
        if(isset($_POST['submit'])){
            $user_username = mysqli_real_escape_string($db, trim($_POST['username']));
            $user_password = mysqli_real_escape_string($db, trim($_POST['password']));
            if((!empty($user_username)) && (!empty($user_password))){
                $query = "SELECT `user_id`, `username` FROM `singup` WHERE
                username = '$user_username' AND password = SHA('$user_password')";
                $data = mysqli_query($db, $query);
                if(mysqli_num_rows($data) == 1){
                    $row = mysqli_fetch_assoc($data);
                    setcookie('user_id', $row['user_id'], time()+(60*60*24*30));
                    setcookie('username', $row['username'], time()+(60*60*24*30));
                    $home_url = 'http://project/lab_8_2/home.php';
                    header('Location: ' . $home_url);
                }
                else{
                    echo 'Введите верный пароль или логин';
                }
            }
            else{
                echo 'Введите верный пароль или логин';
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
<body>
<nav class='main_nav'>
      <ul>
        <li>
          <img src='home.png'/> Главная
        </li>
        <li>
          Соревнования
          <ul>
            <li>Создать соревнование</li>
            <li>Управление соревнованиями</li>
          </ul>
        </li>
        <li>
          Пользователи
          <ul>
            <li>Добавить пользователя</li>
            <li>Управление пользователями</li>
          </ul>
        </li>
        <li>
          Оповещение
        </li>
        <li>
          Регламент
        </li>
        <?php
            if(empty($_COOKIE['username'])){
            ?>
                <li>
                <img src='create3.png'/><a href='sign_up.php'>Вход</a>
                </li>
                <?php
            } 
            else{
                ?>
                <li>
                <img src='create3.png'/><a href='exit.php'>Выход</a>
                </li>
                <?php
            }
        ?>
      </ul>
    </nav>
    <div class='content'>
    </div>
    <?php
        if(empty($_COOKIE['username'])){
    ?>  
    <div>
        <form action='<?php echo $_SERVER['PHP_SELF']; ?>' method='POST'>
            <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                <input id="email" type="text" class="form-control" name="username" placeholder="Email">
            </div>
            <div class="input-group">
                <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                <input id="password" type="password" class="form-control" name="password" placeholder="Password">
            </div>
            <input type='submit' name='submit' class="btn btn-primary" /><br/>
            <a href='check_in.php'>Регистрация</a>
        </form>
    </div>
    <?php
    }
    ?>
 </body>
    <footer>
        <p>&laquo;12345&raquo; Хабаровск 2018</p>
    </footer>
</html>

