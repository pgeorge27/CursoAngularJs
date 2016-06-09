var miAppAngular = angular.module('miAplicacionAngular',[]);

miAppAngular.controller('miControlador', function($scope){
	
	$scope.heroes = [
		{
			nombre: "Arnold", apellido: "Schwarzenegger"
		},
		{
			nombre: "Chuck", apellido: "Norris"
		},
		{
			nombre: "Bruce", apellido: "Lee"
		}
	];

	$scope.mostrarDatos = function(info){
		alert('Seleccionaste: ' + info);
	}

});