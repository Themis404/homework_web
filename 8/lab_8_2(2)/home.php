<?php
session_start();
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
            if(empty($_SESSION['username'])){
            ?>
                <li>
                <img src='create3.png'/><a href='sign_up.php'>Вход</a>
                </li>
                <?php
            } 
            else{
                ?>
                <li class="user">
                  <p>Пользователь: <?php echo($_SESSION['username'])?></p>
                </li>
                <li>
                <img src='create3.png'/><a href='exit.php'>Выход</a>
                </li>
                <?php
            }
        ?>
      </ul>
    </nav>
    <div class='content'>
      <div>
        <img src='cat.jpg'/>
        <img src='cat.jpg'/>
      </div>
    </div>
</body>
  <footer>
    <p>&laquo;12345&raquo; Хабаровск 2018</p>
  </footer>
</html>

