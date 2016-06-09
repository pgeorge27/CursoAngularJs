var miAppAngular = angular.module('miAplicacionAngular',[]);

miAppAngular.controller('miControlador', function($scope){

	$scope.opcionA = function(){
		$scope.imagenActiva = 'http://lorempixel.com/200/200';
	}

	$scope.opcionB = function(){
		$scope.imagenActiva = 'http://lorempixel.com/100/100';
	}

	$scope.cambiarEstilo = function(){
		$scope.estilosAngular = {
			width: '600px',
			height: '200px',
			borderRadius: '10px'
		}
	}

	$scope.cambiarClase = function(){
		$scope.clasesAngular = 'segundoEstilo';
	}

	$scope.ocultarCaja = function(){
		$scope.ocultarMenu = true;
	}

	$scope.mostrarCaja = function(){
		$scope.ocultarMenu = false;
	}

});