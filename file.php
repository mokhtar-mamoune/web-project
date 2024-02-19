<?php
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
     if (!file_exists('C:/xampp/htdocs/OnlineEditer/files/'.$_SESSION['username'])) {
            mkdir('C:/xampp/htdocs/OnlineEditer/files/'.$_SESSION['username'], 0777, true);
          }
    if (isset($_POST['filename']) && !empty(trim($_POST['filename']))) {
        $filename = trim($_POST['filename']);
        
        $directory = 'C:/xampp/htdocs/OnlineEditer/files/'.$_SESSION['username'].'/';
        $file = $directory . $filename;
        $content=isset($_POST['file']) ? $_POST['file'] :         '<html>
        </html>';

        if (file_put_contents($file, $content, LOCK_EX) !== false) {
            chmod($file, 0666);
            header('Location: home.php');
     
            exit;
        } 
        
    else {
            echo "Error creating file '$file'. Check permissions and paths.";
        }

    //
    }
    
}
?>