// Récupérer les informations de l'utilisateur depuis le stockage
var utilisateur = {
    nom: localStorage.getItem("nom"),
    email: localStorage.getItem("email"),
    sexe: localStorage.getItem("sexe"),
    photoProfil: localStorage.getItem("photoProfil")
  };
  
  // Mettre à jour les informations de l'utilisateur dans la page HTML
  document.getElementById("profilePic").src = utilisateur.photoProfil;
  document.getElementById("userName").textContent = utilisateur.nom;
  document.getElementById("userEmail").textContent = utilisateur.email;
  document.getElementById("userGender").textContent = utilisateur.sexe;
  