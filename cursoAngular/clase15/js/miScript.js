var miAppAngular = angular.module('miAplicacionAngular',[]);

miAppAngular.controller('miControlador', function($scope){
	$scope.estado = 'zzzzz';

	$scope.dentroDelDiv= function(){
		$scope.estado = 'MouseEnter activo';
	}

	$scope.fueraDelDiv = function(){
		$scope.estado = 'MouseOver activo';
	}

});