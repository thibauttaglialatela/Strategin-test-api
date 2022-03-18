**API sécurisée par Register/Login**
========================================

Une fois le projet cloné faire un *npm install*

Le but du test était de développer une application permettant de s'inscrire via des informations basiques.
-----------------------------------------------------------------------------------------------------------
- **Au premier accés**, l'utilisateur peut se créer un compte (email, mdp) sur la route */register*
- **Une fois le compte créé**, il doit utiliser la route */login* pour récupérer un token.
- **Une fois logué**, l'utilisateur peut accéder à la liste des utilisateurs déjà enregistrés sur la plateforme via la route */users*.

**Technos utilisées**
-----------------------
- **Langage** : node.js
- **Normes et dépendances** : ES6, Express, Mongoose, bcryptjs
- **database** : MongoDB
