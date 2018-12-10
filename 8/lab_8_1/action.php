<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="main.js"></script>
</head>
<body style="width: 500px; margin: 0 auto;">
<?php
if($_FILES){
    $to = htmlspecialchars($_POST['mail']);
    $from = 'legen_waitforit_dary@mail.ru';
    $subject = 'Форма отправки';

    $name = htmlspecialchars($_POST['name_info']);
    $age = htmlspecialchars($_POST['age']);
    $gender = htmlspecialchars($_POST['gender']);
    $hobby = htmlspecialchars($hobby);
    $feedback = htmlspecialchars($_POST['feedback']);
    
    $new_file = $_FILES["file_name"]["name"];
    $file = "file/".$new_file;
    $file_all = file_get_contents($file);
    $file_set = chunk_split(base64_encode($file_all));

    $mail_to_myemail = "Привет!
Ваше имя: $name
Ваш возраст: $age
Ваш пол: $gender
Ваше(и) хобби: $hobby
Ваш отзыв: $feedback
Файл: $file_set";

    $headers = "From: $from \r\n";
    if (mail($to, $subject, $mail_to_myemail, $headers . 'Content-type: text/plain; charset=utf-8'))
    {
        echo "<p 
        style=\"
            color: #26734d; 
            background: #9fdfbf; 
            width: 300px; 
            margin: 20px 80px; 
            padding: 20px 20px;
            border-radius: 20px; 
        \">Сообщение отправлено. Спасибо, $name</p>";
    }
    else{
        echo "Простите, " . $name . ", но сообщение не отправлено";
    }
}
?>
<form>
    Имя: <?php echo htmlspecialchars($_POST['name_info']); ?>. <br/>
    Возраст: <?php echo htmlspecialchars($_POST['age']); ?>. <br/>
    Пол: <?php echo htmlspecialchars($_POST['gender']); ?>. <br/>
    <?php $hobby = $_POST['computer'].$_POST['sport'].$_POST['art'].$_POST['science']; ?>
    Интересы: <?php echo $hobby; ?>. <br/>
    Отзыв: <?php echo htmlspecialchars($_POST['feedback']); ?>. <br/>
    Файл: <?php 
        if(is_uploaded_file($_FILES["file_name"]["tmp_name"])){
            $new_file = $_FILES["file_name"]["name"];
            if(! move_uploaded_file($_FILES["file_name"]["tmp_name"], "file/" . $new_file)){
            echo 'Упс!';
            exit();
            }
            else{
                echo($_FILES["file_name"]["name"] . '<br/>');
                echo("<img src = 'file/$new_file' alt = 'file/$new_file'/>");
            }
        }
    ?><br/>
</form>
</body>
</html>



