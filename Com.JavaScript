document.getElementById('comment-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire

  var commentInput = document.getElementById('comment-input');
  var commentSection = document.getElementById('comment-section');

  var comment = document.createElement('div');
  comment.classList.add('comment');
  comment.textContent = commentInput.value;

  commentSection.appendChild(comment);

  commentInput.value = ''; // Efface le contenu du champ de texte après l'envoi du commentaire
});