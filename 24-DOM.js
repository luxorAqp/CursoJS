'use strict'
alert("DOM");

function cambiacolor(color1,color2)
{
	caja.style.background = color1;
	caja.style.color = color2;

}

// METODO 1
var caja = document.getElementById("micaja");

caja.innerHTML = "¡TEXTO INGRESADO DESDE JS!";
caja.style.background= "red";
caja.style.color="white";
caja.style.padding = "20px";

//METODO 2

var caja2 = document.querySelector("#micaja");
caja2.style.background = "purple";
caja2.style.color = "pink";
//cambiacolor("green","black");
console.log(caja);