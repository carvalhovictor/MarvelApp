angular.module('marvelApp').controller('homeCtrl', function($scope, characters) {
    $scope.characters = characters.data.data.results;
});