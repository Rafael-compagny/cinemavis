// Exemple de connexion à une base de données
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('Connecté à la base de données');
});

// Exemple d'insertion des informations du profil de l'utilisateur dans la base de données
var userProfile = {
  name: 'John Doe',
  gender: 'Homme',
  email: 'john.doe@example.com'
};

var sql = 'INSERT INTO user_profiles (name, gender, email) VALUES (?, ?, ?)';
var values = [userProfile.name, userProfile.gender, userProfile.email];

connection.query(sql, values, function(err, result) {
  if (err) throw err;
  console.log('Informations du profil insérées avec succès');
});

// Exemple de récupération des informations du profil de l'utilisateur depuis la base de données
var userId = 1;

var sql = 'SELECT * FROM user_profiles WHERE id = ?';
var values = [userId];

connection.query(sql, values, function(err, result) {
  if (err) throw err;

  if (result.length > 0) {
    var userProfile = result[0];
    console.log('Nom :', userProfile.name);
    console.log('Sexe :', userProfile.gender);
    console.log('Email :', userProfile.email);
  } else {
    console.log('Profil introuvable');
  }
});

// Fermeture de la connexion à la base de données
connection.end(function(err) {
  if (err) throw err;
  console.log('Déconnecté de la base de données');
});




