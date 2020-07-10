'use strict'

alert("busqueda");

var arreglo = ["Juan","Pedro","Pablo"];

var busqueda1 = arreglo.find(function (nombres)
	{
		return nombres == "Pedro";

	});



var busqueda = arreglo.find(dato => dato == "Juan");

console.log("Busqueda 1" +busqueda1);

console.log(busqueda);