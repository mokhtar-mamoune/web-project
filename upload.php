<?php
session_start();
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (!file_exists('C:/xampp/htdocs/OnlineEditer/files/'.$_SESSION['username'])) {
           mkdir('C:/xampp/htdocs/OnlineEditer/files/'.$_SESSION['username'], 0777, true);
         }

if(isset($_FILES["file"]) && $_FILES["file"]["error"] == 0){
    
    $targetDirectory = 'C:/xampp/htdocs/OnlineEditer/files/'.$_SESSION['username'].'/'; 
    $targetFile = $targetDirectory . basename($_FILES["file"]["name"]); 
    

    if(move_uploaded_file($_FILES["file"]["tmp_name"], $targetFile)){
        echo "The file ". htmlspecialchars(basename($_FILES["file"]["name"])). " has been uploaded.";
    } else{
        echo "Sorry, there was an error uploading your file.";
    }
} else{
    echo "Error: ".$_FILES["file"]["error"];
}

}
?>

