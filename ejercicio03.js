'use strict'
alert("ejercicio 03");
//HACER UN PROGRAMA DONDE EL USUARIO INGRESE DOS NUMEROS Y EL PROGRAMA MUESTRE TODOS LOS  NUMEROS QUE HAY ENTRE LOS DOS NUMEROS INGRESADOS

var num1 = parseInt(prompt("Ingrese el primer numero"));
var num2 = parseInt(prompt("Ingrese el segundo numero"));

document.write("<h1> Los numeros que están entre "+num1+ " y "+num2+ "son : " + "</h1>");
if(num1 > num2)
{
	var rango = num1 - num2;
	console.log(rango);

	for (var i = 1; i < rango; i++) 
	{
		var numeros = parseInt(i+num2);
		document.write("--> " +numeros + "</br>");
		console.log("--> " +numeros);
		
		
	}

}
else
{
	var rango = num2 - num1;
	console.log(rango);

	for (var i = 1; i < rango; i++) 
	{
		var numeros = parseInt(i+num1);
		document.write("--> " +numeros + "</br>");
		console.log("--> " +numeros);
		
	}
}

