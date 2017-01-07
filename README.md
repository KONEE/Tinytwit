 
 Structure du fichier 
app.js : Ce fichier sera utilisé pour définir le module principal et le module de services internes de l'application. 
 controllers.js : Ce fichier va gérer les différentes interactions de l' utilisateur. 
 index.html : Dans ce dossier ,charger le module principal et de fournir l'interface utilisateur. 
 oauth.js : Ceci est le SDK JavaScript fourni par OAuth.io pour gérer l'authentification OAuth. 
 services.js : Il va être utilisé pour gérer la communication avec OAuth.io . 


Les fontions Importantes


 *connectTwitter() : utilisé pour connecter un utilisateur à Twitter,
 *getLatestTweets() : récupère les derniers tweets de la timeline de l'utilisateur. 
 *getDirectMessage():
 *PostDirectMesssageSend(): Envoie un nouvel message direct à l'utilisateur spécifié à partir de l'utilisateur d'authentification. 
 *PostFollower(): Permet aux utilisateurs d'authentification de suivre l'utilisateur spécifié dans le paramètre ID. 

 la méthode OAuth.popup() est utilisée pour déclencher un popup qui demande aux utilisateurs de se connecter avec leur compte Twitter. Si l'opération est réussie ,résolution la promesse en appelant deferred.resolve() . En cas d'erreur,rejet la promesse et passons l'objet d'erreur à la fonction de résolution. De même, la fonction getLatestTweets() fait un appel à l'API endpoint /1.1/statuses/home_timeline.json pour obtenir une liste de tweets. Une fois l'opération réussie, nous résolvons la promesse.tout comme getDirectMessage () fait appel à API /1.1/direct_messages.json 
