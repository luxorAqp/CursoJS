'use strict'
alert("FUNCIONES");

var num1 = parseInt(prompt("Ingrese el primer numero"))
var num2 = parseInt(prompt("Ingrese el segundo numero"))
var suma,resta,multiplicacion;
function calculadora(numa,numb,mostrar=false)
{
	if (mostrar == false) 
		{
			suma = parseInt(numa+numb);
			console.log(suma);
			resta = parseInt(numa-numb);
			console.log(resta);
	
		} 
	else 
	{
		document.write("la multiplicacios es : "+(numa*num2)+"<br/>");
		document.write("la division es : "+(numa/num2)+"<br/>");
	}
	

}
calculadora(3,5);
calculadora(num1,num2,true);

/*
for (var i = 0; i < 10; i++) 
{
	calculadora(i,8);
}
*/