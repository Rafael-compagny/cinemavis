document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Récupérer le commentaire saisi par l'utilisateur
    var commentInput = document.getElementById("comment").value;
  
    // Envoyer une requête POST au serveur pour enregistrer le commentaire
    fetch("/enregistrer_commentaire", {
      method: "POST",
      body: JSON.stringify({ comment: commentInput }),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(function(response) {
      if (response.ok) {
        // Le commentaire a été enregistré avec succès, rafraîchir la liste des commentaires
        afficherCommentaires();
        document.getElementById("comment").value = ""; // Réinitialiser le champ de commentaire
      } else {
        console.log("Erreur lors de l'enregistrement du commentaire.");
      }
    })
    .catch(function(error) {
      console.log("Erreur lors de la communication avec le serveur :", error);
    });
  });

  


  function afficherCommentaires() {
    fetch("/recuperer_commentaires") // Envoyer une requête GET pour récupérer les commentaires
    .then(function(response) {
      if (response.ok) {
        return response.json(); // Convertir la réponse en JSON
      } else {
        throw new Error("Erreur lors de la récupération des commentaires.");
      }
    })
    .then(function(data) {
      var commentList = document.getElementById("commentList");
      commentList.innerHTML = ""; // Effacer les commentaires précédents
  
      // Parcourir les commentaires et les ajouter à la liste
      data.forEach(function(comment) {
        var li = document.createElement("li");
        li.textContent = comment.text; // Afficher le texte du commentaire
        commentList.appendChild(li);
      });
    })
    .catch(function(error) {
      console.log("Erreur lors de la communication avec le serveur :", error);
    });
  }
  
  // Appeler la fonction pour afficher les commentaires au chargement de la page
  afficherCommentaires();

  

  // Vérifier si l'utilisateur est connecté
if (!utilisateurConnecte) {
    window.location.href = "profil.html"; // Redirection vers la page d'inscription
  }
  