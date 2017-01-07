angular.module('twitterApp.services', []).factory('twitterService', function($q) {

    var authorizationResult = false;
    return {
        initialize: function() {
            // initialise OAuth.io avec la clé publique de l'application
            OAuth.initialize('19gVB-kbrzsJWQs5o7Ha2LIeX4I', {
                cache: true
            });
        	// essayez de créer un résultat d'autorisation lorsque la page est chargée,
         // cela signifie qu'un utilisateur qui retourne ne devra pas cliquer de nouveau sur le bouton twitter
            authorizationResult = OAuth.create("twitter");
        },
        isReady: function() {
            return (authorizationResult);
        },
        connectTwitter: function() {
            var deferred = $q.defer();
            OAuth.popup("twitter", {
                cache: true
            }, function(error, result) {
                // cache signifie exécuter le callback si les jetons sont déjà présents
                if (!error) {
                    authorizationResult = result;
                    deferred.resolve();
                } else {
                    // faire quelque chose s'il ya une erreur
                }
            });
            return deferred.promise;
        },
        clearCache: function() {
            OAuth.clearCache('twitter');
            authorizationResult = false;
        },
        getLatestTweets: function(maxId) {
            // crée un objet différé en utilisant le service $ q de Angular
            var deferred = $q.defer();
            var url = '/1.1/statuses/home_timeline.json';
            if (maxId) {
                url += '?max_id=' + maxId;
            }
            var promise = authorizationResult.get(url).done(function(data) {
                // https://dev.twitter.com/docs/api/1.1/get/statuses/home_timeline
               // lorsque les données sont récupérées, résoudre l'objet différé
                deferred.resolve(data);
            }).fail(function(err) {
                deferred.reject(err);
            });
            // retourne la promesse de l'objet différé
            return deferred.promise;
        },
        getDirectMessage: function(maxId) {
            // crée un objet différé en utilisant le service $ q de Angular
            var deferred = $q.defer();
            var url = ' /1.1/direct_messages.json ';
            if (maxId) {
                url += '?max_id=' + maxId;
            }
            var promise = authorizationResult.get(url).done(function(data) {
                //  Https://api.twitter.com/1.1/direct_messages.json 
               // lorsque les données sont récupérées, résoudre l'objet différé
                deferred.resolve(data);
            }).fail(function(err) {
                deferred.reject(err);
            });
            // retourne la promesse de l'objet différé
            return deferred.promise;
        },
        PostDirectMessage: function() {
            // crée un objet différé en utilisant le service $ q de Angular
            var deferred = $q.defer();
            var url = ' /1.1/direct_messages/new.json ';
            
            var promise = authorizationResult.get(url).done(function(data) {
                  //Https://api.twitter.com/1.1/direct_messages/new.json             
                  // lorsque les données sont récupérées, résoudre l'objet différé
                deferred.resolve(data);
            }).fail(function(err) {
                deferred.reject(err);
            });
            // retourne la promesse de l'objet différé
            return deferred.promise;
        },
        PostFollower: function() {
            // crée un objet différé en utilisant le service $ q de Angular
            var deferred = $q.defer();
            var url = ' /1.1/friendships/create.json  ';
            
            var promise = authorizationResult.get(url).done(function(data) {
                  // Https://api.twitter.com/1.1/friendships/create.json             
                  // lorsque les données sont récupérées, résoudre l'objet différé
                deferred.resolve(data);
            }).fail(function(err) {
                deferred.reject(err);
            });
            // retourne la promesse de l'objet différé
            return deferred.promise;
        }
    }
    
});