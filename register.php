<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $upassword = $_POST['password'];

    $host = 'localhost';
    $db = 'web_project_db';
    $user = 'root';
    $dbPassword = '';
    $link = mysqli_connect($host, $user, $dbPassword, $db);

    if (!$link) {
        echo "Erreur de connexion";
    }

    try {
        $stmt = $link->prepare("INSERT INTO users (username, email, mot_passe) VALUES (?, ?, ?)");
        $stmt->bind_param("sss",$username, $email, password_hash($upassword, PASSWORD_DEFAULT));
        $stmt->execute();
        $_SESSION['username'] = $username;
        header("Location: /OnlineEditer/home.php");
        exit();
    } catch (PDOException $e) {
        die("Erreur lors de l'exécution de la requête : " . $e->getMessage());
    }
}
?>
<html>
<head>
    <link rel="stylesheet" href="assets/page.css">
</head>
<body>

    <form action="register.php" method="post">
    
            <div id="prt" >
               
            <img class="thumbnail" src="assets/im.png" alt="mon_image">
        <div style="position: relative;top: -205px;left: 450px;">
            <h3>Register</h3>
            <label for="usernm"><b>username</b></label><br>
            <input class="usr" type="text" name="username" placeholder="username" required>
            <br><br>
            <label for="emaile"><b>email</b></label><br>
            <input class="usr" autofocus type="email" name="email" placeholder="email" required>
            <br><br>
            <label for="pass"><b>password</b></label><br>
            <input class="usr" type="password" name="password" placeholder="password" required>
            <br><br>
        <input id="bt" type="submit" name="submit" value="register">
        <br><br>
       <b>vous avez deja un compte?</b><a href="/OnlineEditer/login.php" style="color:  rgb(2, 33, 75);text-decoration: none;"><b>login</b></a>

    </div>
    </div>
        
    </form>
    
    </body>
    </html>