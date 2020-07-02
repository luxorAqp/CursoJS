'use strict'
alert("FUNCIONES DE BUSQUEDA");
var numero = 4556;
var texto1 = "Las no personas nomades pueden agregar no pueden quitar";
var texto2 = "Los perros hambrientos";

var busqueda = texto1.match(/no/gi);

var busqueda = texto1.indexOf("nomades");

var busqueda =  texto1.startsWith("Las no");

var busqueda = texto1.endsWith("quitar");

var busqueda = texto1.includes("pueden");

var busqueda =  texto1.match("agregar");

var busqueda = texto1.substr(14,6);

var busqueda = texto1.charArt(23);


console.log(busqueda);
