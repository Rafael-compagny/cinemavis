document.getElementById("saveProfileButton").addEventListener("click", function() {
    var name = document.getElementById("nameInput").value;
    var gender = document.getElementById("genderInput").value;
    var email = document.getElementById("emailInput").value;
  
    var profile = {
      name: name,
      gender: gender,
      email: email
    };

    export const name = name
    export const gender = gender
    export const email = email
  
    // Utilisez les informations du profil comme vous le souhaitez, par exemple pour les afficher sur la page ou les envoyer au serveur.
  });