angular.module('marvelApp').config(function ($routeProvider) {
    $routeProvider.when("/home", {
		templateUrl: "view/home.html",
		controller: "homeCtrl",
		resolve: {
			characters: function(marvelAPI){
				return marvelAPI.getCharacters();
			},
		}
	});
	$routeProvider.when("/characterDetails/:id", {
		templateUrl: "view/characterDetails.html",
		controller: "characterDetailsCtrl",
		resolve: {
			character: function(marvelAPI, $route){
				return marvelAPI.getCharacter($route.current.params.id);
			}
		}

	});
    $routeProvider.otherwise({redirectTo: "/home"});
});