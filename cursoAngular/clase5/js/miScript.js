var miAppAngular = angular.module('miAplicacionAngular',[]);

miAppAngular.controller('miControlador', function($scope){
	$scope.frutas = ['Kiwi', 'Banana', 'Arandano'];
});