'use strict'
alert("FUNCIONES DE TEXTO");

//TRANSFORMAR CUALQUIER VALOR A STRING

var numero =35;
var dato = numero.toString(numero);

console.log(dato);
console.log(typeof dato);

// *******************************++

//PARA TRANSFORMAR MINUSCULAS A MAYUSCULAS O VICEVERSA

var texto0 = "hola a mi programa";
var dato0 = texto0.toUpperCase();
console.log(dato0);

var texto1 = "BIENVENIDO LUIS";
var dato1 = texto1.toLowerCase(texto1);
console.log(dato1);

//PARA CONTAR LA CANTIDAD DE CARACTERES O DATOS DE UNA CADENA

var texto2="mi nomre es Khan";
console.log(texto2.lenght); 