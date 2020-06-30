'use strict'
alert("FUNCIONES ANONIMAS");
//FUNCION ANONIMA
var pelicula = function (nombre)
{
	return "la pelicula es: "+nombre;
}



//CALLBACK

function llamar(num1,num2, funcionsuma,funcionxdos)
{
	var suma = num1+num2;
	funcionsuma(num1);
	funcionxdos(num2);

}

llamar(5,7,function(dato)
	{
		console.log("La suma es: " +dato);

	},
	function(dato)
	{
		console.log("La suma x dos es: "+(dato*2));
	});

