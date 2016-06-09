var miAppAngular = angular.module('miAplicacionAngular',[]);

miAppAngular.controller('miControlador', function($scope){
	$scope.mensaje = "Controlador Activo!"
});

miAppAngular.controller('frutas', function($scope){
	$scope.nombre = "Mango"
});

miAppAngular.controller('personas', function($scope){
	$scope.nombre = "George Perez"
});