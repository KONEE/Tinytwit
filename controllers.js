app.controller('TwitterController', function($scope, $q, twitterService) {
    $scope.tweets = []; //tableau de tweets
    $scope.messages=[];//tableau de messages
    twitterService.initialize();

        // en utilisant le résultat d'autorisation OAuth obtenez les 20 derniers tweets de twitter pour l'utilisateur
    $scope.refreshTimeline = function(maxId) {
        twitterService.getLatestTweets(maxId).then(function(data) {
            $scope.tweets = $scope.tweets.concat(data);
        }, function() {
            $scope.rateLimitError = true;
        });
    }
    
// en utilisant le résultat d'autorisation OAuth obtenez les 20 derniers messages de l'utilisateur
    $scope.refreshMessage = function(maxId) {
        twitterService.getDirectMessage(maxId).then(function(data) {
            $scope.messages = $scope.messages.concat(data);
        }, function() {
            $scope.rateLimitError = true;
        });
    }


    // lorsque l'utilisateur clique sur le bouton de connexion twitter, la fenêtre d'autorisation popup s'ouvre
    $scope.connectButton = function() {
        twitterService.connectTwitter().then(function() {
            if (twitterService.isReady()) {
                // si l'autorisation est réussie, masquer le bouton de connexion et afficher les tweets
                $('#connectButton').fadeOut(function() {
                    $('#getTimelineButton, #signOut').fadeIn();
                    $scope.refreshTimeline();
                    $scope.connectedTwitter = true;
                });
            } else {

            }
        });
    }

    // sign out efface le cache OAuth, l'utilisateur devra se réauthentifier lors du retour
    $scope.signOut = function() {
        twitterService.clearCache();
        $scope.tweets.length = 0;
        $('#getTimelineButton, #signOut').fadeOut(function() {
            $('#connectButton').fadeIn();
            $scope.$apply(function() {
                $scope.connectedTwitter = false
            })
        });
    }

    // si l'utilisateur est un utilisateur de retour, masquez le bouton d'ouverture de session et affichez les tweets
    if (twitterService.isReady()) {
        $('#connectButton').hide();
        $('#getTimelineButton, #signOut').show();
        $scope.connectedTwitter = true;
        $scope.refreshTimeline();
    }
});