'use strict'
/*
Programa que pida dos numeros y que muestre cual es mayor, menor y si son iguales
*/

var numero1 = parseInt(prompt ("Ingrese un numero")) ;

var numero2 = parseInt(prompt ("Ingrese un numero"));


if(numero1 <=0 || isNaN(numero1))
{
	numero1 = parseInt(prompt ("Ingrese el primer numero")) ;
}
else
{
	if (numero2 <=0 || isNaN(numero2))
	{
		numero2 = parseInt(prompt ("Ingrese el segundo numero"));
	}
}

if(numero1<numero2)
{
	console.log(numero2 + " es mayor")

}
else
{
	if (numero1 > numero2) 
		{
			console.log(numero1 + " es mayor");
		} 
		else 
		{
			console.log("Los numeros son iguales");
		}

}

console.log(typeof(numero1));