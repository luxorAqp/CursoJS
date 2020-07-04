'use strict'
alert("FUNCIONES TEXTO");

var numero = 567;
var texto1 = "Fuente en el despertar de la vida";
var texto2 = "    Las cosas empiezan a caer cuando   ";
console.log(texto1);
var resultdo = texto1.replace("despertar","amanecer");
console.log(resultdo);

var resultdo1 =  texto1.slice(5);
console.log(resultdo1);

 var resultado2 = texto1.slice(5,9);
 console.log(resultado2);

var resultado3 = texto1.split(" ");
console.log(resultado3);

var resultado4 = texto1.trim(texto2);
console.log(resultado4);