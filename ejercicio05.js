'use strict'
//MOSTRAR TODO LOS MULTIPLOS DE UN NÚMERO INGRESADO POR TECLADO
alert("EJERCICIO 05");


var num1 = parseInt(prompt("Número"));

for (var i = 0; i <= num1; i++) 
{
	if(num1%i == 0)
	{
		console.log(i+" es multplo de "+num1);

	}
	else
	{
		console.log(i+" no es multplo de "+num1);

	}
}
	