function mostrar()
{
	/* Hecho sin el while();
	let num1;
	let num2;
	let num3;
	let num4;
	let num5;
	let numFinal;

	num1= parseInt(prompt("Ingrese un numero"));
	num2= parseInt(prompt("Ingrese un numero"));
	num3= parseInt(prompt("Ingrese un numero"));
	num4= parseInt(prompt("Ingrese un numero"));
	num5= parseInt(prompt("Ingrese un numero"));*/

	
	let numFinal= 0;
	let i= 0;

	while (i<5){

		numFinal+= parseInt(prompt("Ingrese un numero"));
		i++;

	}

	document.getElementById("txtIdSuma").value = numFinal;
	document.getElementById("txtIdPromedio").value = (numFinal / 5);

}