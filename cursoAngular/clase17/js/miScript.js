var miAppAngular = angular.module('miAplicacionAngular',[]);

miAppAngular.controller('miControlador', function($scope){
	
	$scope.estado = 'ZZZZzzz';
	
	$scope.detectarTecla = function(e){
		switch(e.keyCode){
			case 37:
				$scope.estado = 'izquierda';
				break;
			case 38:
				$scope.estado = 'arriba';
				break;
			case 39:
				$scope.estado = 'derecha';
				break;
			case 40:
				$scope.estado = 'abajo';
				break;
		}
	}

});