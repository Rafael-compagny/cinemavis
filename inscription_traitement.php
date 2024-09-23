<?php
// Connexion à la base de données (remplacez les paramètres par ceux de votre base de données)
$serveur = "localhost";
$nom_utilisateur = "votre_nom_utilisateur";
$mot_de_passe = "votre_mot_de_passe";
$base_de_donnees = "votre_base_de_donnees";

$connexion = new mysqli($serveur, $nom_utilisateur, $mot_de_passe, $base_de_donnees);

// Vérifier s'il y a une erreur de connexion
if ($connexion->connect_error) {
    die("Erreur de connexion à la base de données : " . $connexion->connect_error);
}

// Récupérer les données du formulaire
$username = $_POST['username'];
$password = $_POST['password'];
$email = $_POST['email'];

// Hasher le mot de passe (pour des raisons de sécurité, ne stockez jamais les mots de passe en texte brut)
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

// Insérer les données dans la base de données
$sql = "INSERT INTO utilisateurs (username, password, email) VALUES ('$username', '$hashed_password', '$email')";

if ($connexion->query($sql) === TRUE) {
    echo "Inscription réussie!";
} else {
    echo "Erreur lors de l'inscription : " . $connexion->error;
}

$connexion->close();
?>
