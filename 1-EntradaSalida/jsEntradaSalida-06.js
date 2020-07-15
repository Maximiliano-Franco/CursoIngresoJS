/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	
	// Declaro variables
	let num1;
	let num2;
	let resultado;

	// Asigno variables al valor del Id
	//FIXME: El dato a la derecha del = siempre es lo que se ejecuta primero y lo que le da el valor al dato de la izquierda
	num1 = document.getElementById("txtIdNumeroUno").value;
	num2 = document.getElementById("txtIdNumeroDos").value;

	// ParseInt pasa cualquier numero en una "string" a un numero de tipo "Int"
	// Se le asigna la variable que se quiere convertir a numero entre () y se le asigna a la variable que se quiere que quede guardada
	num1 = parseInt(num1);
	num2 = parseInt(num2);

	/* Siempre es recomendable asignar el tipo que sabemos que corresponde antes de realizar operaciones
	para que quede guardado en ese tipo para cualquier funcion que querramos utilizar mas adelante */

	/*FIXME: Si el "+" esta entre numbers, funciona como operacion aritmetica.
	Si el "+" esta entre otro tipo de datos, los concatena */
	resultado = num1 + num2;

	// Esta es la forma concatenando strings y variables
	alert ("La suma es " + resultado);

	// Esta es la forma utilizando string template
	alert (`La suma es ${resultado}`);

	/* string + string = string
	   string + number = string
	   number + string = string
	   number + number = number
	   							*/

}

