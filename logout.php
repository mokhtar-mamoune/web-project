<?php
    session_start();
    session_destroy();
    header("Location: /OnlineEditer/login.php");
    exit();
?>