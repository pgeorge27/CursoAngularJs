var miAppAngular = angular.module('miAplicacionAngular',[]);

miAppAngular.controller('miControlador', function($scope){
	$scope.valor1 = 0;
	$scope.valor2 = 0;
	$scope.sumar = function(){
		$scope.resultado = parseFloat($scope.valor1) + parseFloat($scope.valor2);
	}
	$scope.multiplicar = function(){
		$scope.resultado = $scope.valor1 * $scope.valor2;
	}
});