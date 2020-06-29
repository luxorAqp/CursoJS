'use strict'
// Switch

alert("switch");
var edad=7;
var imprime="";

switch(edad)
{
	case 18:
		imprime = "ya  eres mayor de edad";
		break;
	case 25:
		imprime = "estas  en la edad";
		break
	case 70:
		imprime = "y eres un anciano";
		break;
	default:
		imprime = "es cualquier otra edad";
		break;			

}
console.log(imprime);