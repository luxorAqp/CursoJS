'use strict'
alert("EJERCICIO ARRAYS");

var array =[];

function FillArray()
{
	var CountElements = prompt("Write the count of elements ");

	for (var i = 0; i < CountElements; i++) 
	{
		array[i] = prompt("Write element");
	}

	//ShowScreen();
	//ReverseArray();
	//ShowConsole();
	//OrderArray();
	SearchElement();


}

function ShowScreen()
{
	array.forEach(element =>
	{
		document.write("<H1>" + element + "</br>" +"</H1>");
	})
}

function ShowConsole()
{
	array.forEach(function (element)
		{
			console.log("Elemento del array --> " +element);
		});
}

function OrderArray()
{
	console.log("ARREGLO ORDENADO");
	array.sort();
	array.forEach(element =>
	{
		console.log(element);

	});
} 

function ReverseArray()
{
	console.log("ARREGLO INVERTIDO");
	array.reverse();
	array.forEach(function (element)
		{
			console.log(element);
		});
}

function SearchElement()
{
	var ElementSearch = prompt("Write the element to search");
	array.forEach(element =>
	{
		if(ElementSearch == element)
		{
			console.log(ElementSearch);
			console.log(element);
			console.log("The element exits ");
		}
		else
		{
			console.log(ElementSearch);
			console.log(element);
			console.log("Elemente is null");
		}

	});
}
FillArray();
