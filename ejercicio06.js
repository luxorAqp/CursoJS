'use strict'
alert("EJERCICIO 06");
//INDICAR SI EL NÚMERO INGRESADO ES PAR O IMPAR


prompt("Escriba -1, para terminar el programa");
do
{
	var numero= parseInt(prompt("Ingrese el número"));
	if(numero%2 == 0)
	{
		document.write(numero+" es numero par")
	}
else
	{
	document.write(numero+" es numero impar")
	}
	

}
while(numero>0);
