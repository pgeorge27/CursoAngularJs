var miAppAngular = angular.module('miAplicacionAngular',[]);

miAppAngular.controller('miControlador', function($scope){
	$scope.frutas = [
		{
			nombre: 'Kiwi',
			color: 'Verde',
			propiedades: 'rica en vitamina C'
		},
		{
			nombre: 'Banana',
			color: 'Amarilla',
			propiedades: 'rica en magnesio y potacio'
		},
		{
			nombre: 'Arandano',
			color: 'Azul',
			propiedades: 'buen antioxidante'
		}
	];
});