angular.module('marvelApp').factory('marvelAPI', function ($http, md5, config) {
    const ts = new Date().getTime()
    const hash = md5.createHash(ts + config.privateKey + config.publicKey).toString();
    const params = "?ts=" + ts + "&apikey=" + config.publicKey + "&hash=" + hash + "&limit=100" + "&offset=100";
    
    const _getCharacters = function() {
        return $http.get(config.baseUrl + "/characters" + params);
    }

    var _getCharacter = function(id) {
        return $http.get(config.baseUrl + "characters/" + id + params);
    } 
    return{
		getCharacters : _getCharacters,
        getCharacter : _getCharacter,
	};
});