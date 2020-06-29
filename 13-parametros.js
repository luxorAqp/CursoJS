'use strict'
alert("PARAMETROS");


//para las funciones que pueden tener más parametros podemos usar REST

function frutas(fruta1, fruta2)
{
	console.log("la fruta es: " +fruta1);
	console.log("la fruta es: " +fruta2);
}

frutas("manzana","platano");

function masfrutas(fruta1,fruta2,...otrasfrutas)
{
	console.log("la fruta es: " +fruta1);
	console.log("la fruta es: " +fruta2);
	console.log(otrasfrutas);

}
masfrutas("durazno","piña","sandia","naranja");

//SPREAD --> para poder ingresar un arreeglo como parte de un parametro en una funcion
console.log("****************************");
var	Herramientas = ["martillo","alicate","clavo"];
function herramientas(herra1, herra2,herra3)
{
	console.log(herra1);
	console.log(herra2);
	console.log(herra3);

}
herramientas(Herramientas,"desarmador","tornillo");

