'use strict'
alert("FUNCIONES");
//FUNCIONES DENTRO DE OTRAS FUNCIONES

var num1 = parseInt(prompt("Ingrese el primer numero"))
var num2 = parseInt(prompt("Ingrese el segundo numero"))
var suma,resta,multiplicacion;
function enconsola(numa,numb)
{
	suma = (numa+numb);
	console.log("-->"+suma);
	resta = (numa-numb);
	console.log(resta);
	
}

function enweb(numa,numb)
{
	document.write("la multiplicacios es : "+(numa*num2)+"<br/>");
	document.write("la division es : "+(numa/num2)+"<br/>");

}

function calculadora(numa,numb,mostrar=false)
{
	if (mostrar == false) 
		{
			enconsola(numa,numb);
	
		} 
	else 
	{
		enweb(numa,numb);
	}
	return true;
	

}
calculadora(num1,num2);
//calculadora(enweb(num1,num2,true));

/*
for (var i = 0; i < 10; i++) 
{
	calculadora(i,8);
}
*/