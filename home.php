<?php
session_start();
$username=$_SESSION['username'];
if (isset($_GET['username'])) {
    $username = $_GET['username'];    
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        
    </style>
    <title>Home</title>
    <link rel="stylesheet" href="assets/style.css">
    
</head>
<body>

    <header>
    <h5 style="color:white;">Bienvenue <?= $username; ?></h5>
    </header>
    
    <nav>
        <a href="/web-project/logout.php" style="color:white;text-decoration: none;"><b>Logout</b></a>
        
        <input type="submit" id="sb" onclick="updateIframeContent()" value="save">
        
        <h6>EXPLORER</h6>
        
        <input type="file" id="sb1" onclick="upload()" multiple><br><br>
        <form action="file.php" method="post">
            <input type="text" id="filename" name="filename"><br>
            <input type="submit" id="ssb1" value="creerfile">
        </form>        
        <br><br>
        <ul id="fileList"></ul>
        
    </nav>
    
    <main>
        <textarea name="n" id="n" cols="6" rows="1" readonly></textarea>
        <br><br>
            <textarea id="src" name="src" cols="100" rows="1" autofocus="autofocus" spellcheck="false" wrap="hard"></textarea>
       <br> <br>
        <iframe src="about:blank" frameborder="1" name="iframe"></iframe>
   </main>
   
<footer></footer>
<script  src="scripts/script.js"></script>
</body>
</html>
