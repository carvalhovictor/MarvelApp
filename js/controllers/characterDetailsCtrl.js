angular.module('marvelApp').controller('characterDetailsCtrl', function($scope, character){
    $scope.character = character.data.data.results[0];
});