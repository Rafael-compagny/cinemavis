document.getElementById("inscriptionForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var nom = document.getElementById("nom").value;
  var prenom = document.getElementById("prenom").value;
  var sexe = document.getElementById("sexe").value;
  var email = document.getElementById("email").value;
  var motDePasse = document.getElementById("motDePasse").value;

  // Enregistrer les informations de l'utilisateur dans le stockage (localStorage, base de données, etc.)

  // Mettre à jour les informations de profil dans la page HTML
  document.getElementById("userName").textContent = nom;
  document.getElementById("userFirstName").textContent = prenom;
  document.getElementById("userGender").textContent = sexe;
  document.getElementById("userEmail").textContent = email;
  document.getElementById("profilePic").src = sexe === "masculin" ? "CA.jpg" : "image_profil_feminin.png";
});

document.getElementById("connexionForm").addEventListener("submit", function(event) {
  event.preventDefault();

  var emailConnexion = document.getElementById("emailConnexion").value;
  var motDePasseConnexion = document.getElementById("motDePasseConnexion").value;

  // Vérifier les informations de connexion dans le stockage (localStorage, base de données, etc.)

  // Mettre à jour les informations de profil dans la page HTML
  document.getElementById("userName").textContent = nom;
  document.getElementById("userFirstName").textContent = prenom;
  document.getElementById("userGender").textContent = sexe;
  document.getElementById("userEmail").textContent = email;
  document.getElementById("profilePic").src = sexe === "masculin" ? "CA.jpg" : "image_profil_feminin.png";
});
