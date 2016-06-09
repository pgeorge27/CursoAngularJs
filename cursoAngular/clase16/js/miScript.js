var miAppAngular = angular.module('miAplicacionAngular',['ngTouch']);

miAppAngular.controller('miControlador', function($scope){
	$scope.estado = 'zzzzz';

	$scope.dentroDelDiv= function(){
		$scope.estado = 'MouseEnter activo';
	}

	$scope.fueraDelDiv = function(){
		$scope.estado = 'MouseOver activo';
	}

	$scope.swipeIzq = function(){
		$scope.estado = '<-- Swipe ';
	}

	$scope.swipeDe = function(){
		$scope.estado = 'Swipe --> ';
	}


});