'use strict'


//var Prestamo = parseInt(prompt("Monto del prestamo"));
//var Tiempo = parseInt(prompt("Tiempo del prestamo"));
//var Tasa = parseInt(prompt("Tasa del prestamo"));
var Resultado = 0;
var x,y=0;
var numerador, denominador=0;

function CalMen (Pres, Periodo, TasaMensual)
{
	x = ((TasaMensual/100)*Pres);

	var y1 = 1+  (TasaMensual/100);
	var y2 = -Periodo;

	y = 1 - Math.pow(y1,y2);
	

	Resultado = x/(y);
	return Resultado; 

}

//CalMen(Prestamo,Tiempo,Tasa);
CalMen(50000,60,1.38);
console.log(Resultado);