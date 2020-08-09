/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//Declaro e inicializo las variables
	let dividendo=parseInt(document.getElementById("txtIdNumeroDividendo").value);
	let divisor=parseInt(document.getElementById("txtIdNumeroDivisor").value);
	let resto;

	//Calculo el resto con el operador %
	resto = dividendo % divisor;


	//Muestro el resultado por alert
	alert("El resto es: "+resto);
}
