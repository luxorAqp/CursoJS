'use strict'
//utilizando un bucle mostrar la suma y el promedio de los números introducidos por el usuario hasta que se ingrese un número negativo

var can_num = parseInt(prompt("introduzca la cantidad de numeros"));
var num_ingresado, suma = 0, promedio=0;
console.log(typeof(can_num));

for (var i = 0; i < can_num; i++) 
{
	do
	{
		num_ingresado = parseInt(prompt("introduzca un número positivo"));
		if (num_ingresado>0) 
			{
				suma = suma +num_ingresado;


			} 
			else 
			{
				
				if (num_ingresado==-1) 
				{
					alert("Se termino el programa");
				} 


			}



	}
	while(i>num_ingresado);
}

promedio = suma/can_num;
console.log("La suma es : "+suma);
console.log("El promedio es : "+promedio);
