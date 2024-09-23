document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Récupérer l'adresse e-mail et le mot de passe saisis par l'utilisateur
    var emailInput = document.getElementById("email").value;
    var motDePasseInput = document.getElementById("motDePasse").value;
  
    // Envoyer une requête POST au serveur pour vérifier les informations d'identification
    fetch("/connexion", {
      method: "POST",
      body: JSON.stringify({ email: emailInput, motDePasse: motDePasseInput }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(function(response) {
      if (response.ok) {
        // L'utilisateur est connecté avec succès, rediriger vers la page du profil utilisateur
        window.location.href = "profil.html";
      } else {
        console.log("Adresse e-mail ou mot de passe incorrect.");
      }
    })
    .catch(function(error) {
      console.log("Erreur lors de la communication avec le serveur :", error);
    });
  });
  