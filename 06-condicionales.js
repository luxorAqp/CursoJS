'use strict'
//CONDICIONALES - OPERADORES LOGICOS
//Instrucciones que nos permite comparar dos valores

var edad1 = 12;
var edad2 = 30;

if(edad1 > edad2)
{
	console.log("Edad1 es mayor a edad2");
}
else
{
	console.log("La edad1 es menor")
}

var año = 2020;

if (año != 2017) 
{
	console.log("el año es : " +año);
}

var year = 2008;
//AND
if(year >= 2000 && year <=2020 && year == 2008)
{
	console.log("Se ingreso un buen año");

}
else
{
	console.log("Fue un año erroneo");

}

//OR
if (year == 2028 || (year>2006 && year != 2008)) 
	{
		console.log("Cumple el operador OR");
	} else 
	{
		console.log("No cumplio la condicion");	
	}




