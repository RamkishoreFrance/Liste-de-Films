🎥 Recherche de Films
Une application interactive qui permet de rechercher des films en utilisant l'API TMDb (The Movie Database). L'application offre des fonctionnalités de recherche par titre, d'affichage des films populaires, et de pagination pour naviguer entre les résultats.

🔗 Lien vers l'application : [Recherche de Films sur GitHub Pages](https://ramkishorefrance.github.io/Liste-de-Films/)

🎯 Fonctionnalités
Recherche par titre : Entrez le nom d'un film pour obtenir une liste de résultats correspondants.
Affichage des films populaires : L'application affiche les films populaires par défaut lors du chargement.
Affichage des détails du film : Pour chaque film, l'affiche, le titre, l'année de sortie, et une description sont affichés.
Pagination : Naviguez entre les pages des résultats de recherche avec les boutons "Précédent" et "Suivant".
Gestion des erreurs : Affiche des messages d'erreur en cas de problème avec l'API ou si aucun film n'est trouvé.
🛠️ Technologies utilisées
HTML5 : Structure de l'application.
CSS3 : Styles et mise en page.
JavaScript (ES6) : Logique de l'application, gestion des appels API.
API TMDb : Fournit les données des films (affiches, titres, descriptions).
Module JavaScript : Utilisation des modules ES6 (import/export) pour une meilleure organisation du code.
📋 Utilisation
Recherche de films :

Tapez le nom d'un film dans la barre de recherche et cliquez sur "Rechercher".
Les résultats de la recherche s'affichent avec les affiches, titres, et descriptions des films.
Pagination :

Utilisez les boutons "Précédent" et "Suivant" pour naviguer entre les pages des résultats.
Les boutons sont désactivés si vous êtes sur la première ou la dernière page.
Affichage des films populaires :

Au chargement de la page, l'application affiche une liste des films populaires.
🗃️ Structure du projet
css
Copier le code
Recherche_de_cinema/
├── index.html
├── style.css
├── main.js
├── tmdb.js
└── README.md
index.html : Structure et interface de l'application.
style.css : Styles pour l'apparence de l'application.
main.js : Logique de l'application (recherche, pagination, affichage des résultats).
tmdb.js : Classe pour interagir avec l'API TMDb.
🌐 Lien vers l'application
Accédez à l'application sur GitHub Pages : Recherche de Films

💻 Utilisation en local
Pour exécuter l'application en local, suivez ces étapes :

Installez l'extension Live Server dans Visual Studio Code.
Ouvrez le projet dans Visual Studio Code.
Cliquez sur Go Live pour démarrer un serveur local.
L'application sera accessible à l'adresse http://localhost:5500.
🛡️ Problèmes connus
Certaines requêtes à l'API TMDb peuvent échouer si la connexion Internet est instable.
Les résultats peuvent être limités si l'API atteint la limite de requêtes.
👨‍💻 Auteur
Ramkishore France - GitHub
