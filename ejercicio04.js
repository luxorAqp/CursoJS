'use strict'
alert("EJERCICIO 04");

var num1 = parseInt(prompt("Ingrese el primero número"));
var num2 = parseInt(prompt("Ingrese el segundo número"));
document.write("<H1>LOS NÚMEROS IMPARES SON : </H1>");

if(num1>num2)
		{
			for (var i = num2; i < num1; i++) 
			{
				if(((i%2)==0) || i==1)
				{


				}
				else
				{
					console.log(i);
					console.log(typeof(i));
					document.write("-->"+i+"</br>");

				}
			}
		}
else
{
	if (num2>num1) 
		for (var i = num1; i < num2; i++) 
			{
				if(((i%2)==0) || i==1)
				{


				}
				else
				{
					console.log(i);
					console.log(typeof(i));
					document.write("-->"+i+"</br>");

				}
			}
}