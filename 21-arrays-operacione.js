'use strict'

alert("arreglos");

var nuedat = prompt("Ingrese un animal domestico");
var arreglo = ["perros","gatos","patos"];
var index = 2;

arreglo.push(nuedat);

while(nuedat != "ACABAR")
{
	var nuedat = prompt("Ingrese un animal domestico");
	index = index+1;
	if (nuedat != "ACABAR" ) 
		{
			alert(index);
			if (nuedat == "RATAS") 
				{
					arreglo.splice(index,0);
					//alert(index);

				} 
			else 
				{
					arreglo.push(nuedat);

				}
			
		}
	

}


console.log(arreglo);


console.log(arreglo);
