<?php
session_start();
$username=$_SESSION['username'];
if (isset($_GET['username'])) {
    $username = $_GET['username'];    
}
else {
   // header('Location: /OnlineEditer/login.php');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        
    </style>
    <title>Home</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/646ee5ea7f.js" crossorigin="anonymous"></script>
</head>
<body>

    <header>
    <!-- h5 style="color:white;">Bienvenue  */</h5 -->
<button><i class="fa-solid fa-floppy-disk"></i></button>
<button> <i class="fa-solid fa-folder-plus" title="Nouvelle repertoire"></i></button>
 <button><i class="fa-solid fa-file-circle-plus" title="Nouveau fichier"></i></button>
 <button ><i class="fa-solid fa-file-arrow-up" title="Charger un fichier"></i></button>
 <a href="/web-project/logout.php" style="color:white;text-decoration: none;"><b>Logout</b></a>
    </header>
    
    <nav>
        
        
        <!-- <input type="submit" id="sb" onclick="updateIframeContent()" value="save"> -->
        
        <h6>EXPLORER</h6>
        
        <!-- <input type="file" id="sb1" onclick="upload()" multiple><br><br>
        <form action="file.php" method="post">
            <input type="text" id="filename" name="filename"><br>
            <input type="submit" id="ssb1" value="Nouveau Fichier">
        </form> -->        
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
