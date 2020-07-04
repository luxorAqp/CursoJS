'use strict'
alert("ARRAYS");

/*
var elemento = parseInt(prompt("Que elemento del array quieres",0));
// UN ARREGLO ES UNA COLECCION DE MUCHOS DATOS, 

var arreglo = ["Luis","Garcia","Arequipa",true, 33];

// SE PUEDE DEFINIR UN ARRAY EN FORMA DE OBJETO

var lenguajes = new Array("PHP","Java","C","Cobol");

console.log(arreglo[4]);
console.log(lenguajes[1]);

console.log(typeof elemento);

console.log(lenguajes[elemento]);

*/

var arreglo = new Array(0,1,2,3,4,5,6);

var elemento =  parseInt(prompt("Ingrese la posición del arreglo"));

if(elemento>=arreglo.length)
{
	alert("El arreglo es más corto");
	console.log("El tamaño es mayor");

}
else
{
	//elemento =  parseInt(prompt("Ingrese la posición del arreglo"));
	console.log(arreglo[elemento]);
}