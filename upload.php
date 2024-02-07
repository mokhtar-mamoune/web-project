<?php
$uploadDir = "/web-project/assets/";

if (!empty($_FILES['files']['name'][0])) {
    foreach ($_FILES['files']['name'] as $key => $fileName) {
        if ($_FILES['files']['error'][$key] === UPLOAD_ERR_OK) {
            $filePath = $uploadDir . basename($fileName);
            
            if (move_uploaded_file($_FILES['files']['tmp_name'][$key], $filePath)) {
                echo "Le fichier $fileName a été téléchargé avec succès.\n";
            } else {
                echo "Erreur lors du déplacement du fichier $fileName.\n";
            }
        } else {
            echo "Une erreur s'est produite lors du téléchargement du fichier $fileName.\n";
        }
    }
} else {
    echo "Aucun fichier n'a été téléchargé.\n";
}
?>

