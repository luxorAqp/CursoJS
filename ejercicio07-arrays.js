'use strict'

alert("ejercicios")

var ArrNum = [];
function FillArray()
{
	var QuantyNumber = parseInt(prompt("print quanty of numbers"));

	for(var i = 0; i <= QuantyNumber; i++)
	{
		ArrNum[i] = prompt("print Number");

	}
	console.log(ArrNum);
}

FillArray();