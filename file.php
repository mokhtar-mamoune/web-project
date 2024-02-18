<?php
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['filename']) && !empty(trim($_POST['filename']))) {
        $filename = trim($_POST['filename']);
        $directory = '/opt/lampp/htdocs/web-project/files/';
        $file = $directory . $filename;
        $content='<html>
        </html>';
        if (file_put_contents($file, $content, LOCK_EX) !== false) {
            chmod($file, 0666);
            header('Location: home.php');
            exit;
        } else {
            echo "Error creating file '$file'. Check permissions and paths.";
        }
    }
    
}
?>