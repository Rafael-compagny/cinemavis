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

// Vérifier l'existence de l'utilisateur dans la base de données
$sql = "SELECT * FROM utilisateurs WHERE username='$username'";
$resultat = $connexion->query($sql);

if ($resultat->num_rows == 1) {
    $utilisateur = $resultat->fetch_assoc();

    // Vérifier le mot de passe
    if (password_verify($password, $utilisateur['password'])) {
        echo "Connexion réussie!";
        // Vous pouvez maintenant rediriger l'utilisateur vers la page d'accueil ou la page réservée aux abonnés.
    } else {
        echo "Mot de passe incorrect!";
    }
} else {
    echo "Nom d'utilisateur incorrect!";
}

$connexion->close();
?>
