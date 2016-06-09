var miAppAngular = angular.module('miAplicacionAngular',[]);

miAppAngular.controller('miControlador', function($scope){
	$scope.mensaje = "Expresiones AngularJS";
	$scope.mensaje2 = "... Te dejan agregar muchos valores!";

	$scope.persona = {};
	$scope.persona.nombre = "George";
	$scope.persona.apellido = "Perez";
	$scope.persona.edad = 27;

	$scope.numeroAleatorio = function(){
		return Math.floor(Math.random()*100);
	}
});