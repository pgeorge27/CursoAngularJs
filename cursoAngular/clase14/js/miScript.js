var miAppAngular = angular.module('miAplicacionAngular',[]);

miAppAngular.controller('miControlador', function($scope){
	$scope.conteoClicks = 0;

	$scope.saludo = function(){
		$scope.conteoClicks++;
	}
});