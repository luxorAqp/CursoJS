'use strict'
alert("EJERCICIO ARRAYS");

var CanNum = parseInt(prompt("Cuantos  valores tendra el ARRAY"));
var Arreglo =[];

function LlenarArreglo(arreglo,CanDat)
{
	for (var i = 0; i <= CanDat; i++) 
	{
		arreglo[i]= parseInt(prompt("Ingrese numero"));
		
	}

	
	return arreglo;

}

function MostrarArregloConsola(LlenarArreglo)
{
	console.log(LlenarArreglo);


}
function MostrarArregloPantalla(LlenarArreglo)
{
	document.write("<H1>" +"ARREGLO"+ "</H1>");


}

console.log();
LlenarArreglo(Arreglo,CanNum);
//MostrarArregloConsola(LlenarArreglo(Arreglo,CanNum));

//MostrarArregloPantalla(LlenarArreglo(Arreglo,CanNum));


