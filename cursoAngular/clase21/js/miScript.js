/*jslint browser: true*/
/*global $http, angular*/
var miAppAngular = angular.module('miAplicacionAngular', []);

miAppAngular.controller('miControlador', function ($scope, $http) {
	"use strict";
	$scope.inicializar = function () {
		$http.get('datos.json')
			.success(function (datos) {
				$scope.equipo = datos;
			})
            .error(function (datos) {
               
			});
	};
	
});