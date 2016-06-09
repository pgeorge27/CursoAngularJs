var miAppAngular = angular.module('miAplicacionAngular',[]);

miAppAngular.controller('miControlador', function($scope){
	
	$scope.datos = ['piedra','papel','tijera'];

	$scope.agregar = function(){
		$scope.datos.push($scope.nuevoItem);
	}

	$scope.mostrarDatos = function(info){
		alert('Seleccionaste: ' + info);
	}

});