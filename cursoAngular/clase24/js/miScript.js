var miAppAngular = angular.module('miAplicacionAngular', ['ngRoute']);

miAppAngular.config(['$routeProvider',function($routeProvider) {
	$routeProvider.when('/seccion1',{
		templateUrl: 'plantillas/seccion1.html',
		controller: 'miControlador'
	})
	.when('/seccion2',{
		templateUrl: 'plantillas/seccion2.html',
	})
    .when('/pantalones/:color',{
		templateUrl: 'plantillas/detalles.html',
        controller: 'miControlador'
	})
	.otherwise({
		redirectTo: '/',
		templateUrl: 'plantillas/inicio.html',
	})
}]);