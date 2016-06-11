var miAppAngular = angular.module('miAplicacionAngular', []);

miAppAngular.controller('miControlador', function ($scope) {
	$scope.responder = function(){
		$scope.respuestaDefinitiva = 6 * 9 - 12;
	}
});