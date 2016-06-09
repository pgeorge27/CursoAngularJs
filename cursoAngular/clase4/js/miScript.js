var miAppAngular = angular.module('miAplicacionAngular',[]);

miAppAngular.filter('cambiaVocal', function(){
	var cambiaVocalFiltro = function (datosOriginales, argumento, segundoArgumento){
		var nuevosDatos = datosOriginales.replace(RegExp(segundoArgumento, "g"), argumento);
		return nuevosDatos;
	};
	return cambiaVocalFiltro;
});