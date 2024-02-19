<?php
session_start();
$host = 'localhost';
$db = 'web_project_db';
$user = 'root';
$dbPassword = '';
$link = mysqli_connect($host, $user, $dbPassword, $db);

if (!$link) {
    echo "Erreur de connexion";
}

if (isset($_POST['username']) && isset($_POST['password'])) {
    
    $username_form = $_POST['username'];
    $password_form =$_POST['password'];

    if (empty($username_form)) {
        header("Location: login.php?error=username is required");
        exit();
    } elseif (empty($password_form)) {
        header("Location: login.php?error=password is required");
        exit();
    }
    $requete = $link->prepare("SELECT * FROM users WHERE username=?");
    $requete->bind_param("s", $username_form);
    $requete->execute();
    $result = $requete->get_result();

    if ($result->num_rows === 1) {
        $row = $result->fetch_assoc();
        if (($username_form == $row['username'] ) && (password_verify($password_form, $row['mot_passe']))) {
            $_SESSION['username'] = $row['username'];
            header("Location: /OnlineEditer/home.php");
            exit();
        }else{
            header("Location: login.php?error=username or password incorrect");
            exit();
        }
    }

    header("Location: /OnlineEditer/login.php");
    exit();
}
?>

<html>
    <head>
    <link rel="stylesheet" href="assets/page.css">
    </head>
    <body>

<form action="login.php" method="post">
    <div id="prt">
        <img class="thumbnail" src="assets/im.png" alt="mon_image">
        <?php if (isset($_GET['error'])) { ?>
            <p class="error"><?php echo $_GET['error']; ?></p>
        <?php } ?>
        <div id="dv">
            <h3>Login</h3>
            <label for="username"><b>username</b></label><br><br>
            <input class="usr" autofocus type="text" placeholder="username " name="username"><br><br>
            <label for="password"><b>password</b></label><br><br>
            <input class="ps" type="password" placeholder="password" name="password"><br><br>
            <input id="bt" type="submit" value="login">
        </div>
    </div>
</form>
<div class="reg">
    <b>vous n'avez pas un compte?</b> <a href="/OnlineEditer/register.php" style="color: rgb(2, 33, 75);text-decoration: none;">S'inscrivez</a>
</div>
        
</body>
</html>
