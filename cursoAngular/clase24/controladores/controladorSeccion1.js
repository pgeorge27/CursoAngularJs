miAppAngular.controller('miControlador', function ($scope, $routeParams) {
	$scope.titulo = 'Catalogo de pantalones';
    $scope.colorActual = $routeParams.color;
});