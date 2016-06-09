var miAppAngular = angular.module('miAplicacionAngular',[]);

miAppAngular.controller('miControlador', function($scope){

	$scope.opcionA = function(){

	}

	$scope.opcionB = function(){

	}

	$scope.cambiarEstilo = function(){
		$scope.estilosAngular = {
			width: '600px',
			height: '200px',
			borderRadius: '10px'
		}
	}

	$scope.cambiarClase = function(){

	}

	$scope.ocultarCaja = function(){

	}

	$scope.mostrarCaja = function(){

	}

});