
angular.module('marvelApp').config(function ($httpProvider) {
	$httpProvider.interceptors.push("loadingInterceptor");
});