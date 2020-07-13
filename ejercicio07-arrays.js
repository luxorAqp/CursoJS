'use strict'
alert("EJERCICIO ARRAYS");

var CanNum = parseInt(prompt("Cuantos  valores tendra el ARRAY"));
var array =[];

function LlenarArreglo(arreglo,CanDat,FunctionConsole,FunctionWeb)
{
	for (var i = 0; i < CanDat; i++) 
	{
		arreglo[i]= parseInt(prompt("Ingrese numero"));	
		FunctionConsole(arreglo[i]);
		FunctionWeb(arreglo[i]);
		
	}	



	
}

LlenarArreglo(array,CanNum, function(arreglo2)
	{
		console.log(arreglo2+"xxx");
	},
	function(arreglo2)
	{
		document.write(arreglo2);
	});


