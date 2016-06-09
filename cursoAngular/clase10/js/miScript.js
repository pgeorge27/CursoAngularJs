var miAppAngular = angular.module('miAplicacionAngular',[]);

miAppAngular.directive('usuario', function(){
	var valoresInternos = {};
	valoresInternos.scope = {
		nombreUsuario: '@nombre',
		apellidoUsuario: '@apellido'
	}
	valoresInternos.restric = 'E';
	valoresInternos.template = "Bienvenido {{nombreUsuario}} {{apellidoUsuario}}!";
	return valoresInternos;
});