/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	// declarar variables

	let numero; 
	let positivos;
	let negativos;
	let seguir;

	// armar un bucle hasta que el usuario quiera (usamos DO WHILE)
	do {

		numero = parseInt(prompt("Ingrese un numero: "));	

		if (numero >= 0){
			positivos = positivos + numero;
		}
		else {
			negativos = negativos * numero;
		}

		seguir = prompt("Quiere ingresar otro numero? ");

	} while (seguir == 's');

	document.getElementById("txtIdSuma").value = positivos;
	document.getElementById("txtIdProducto").value = negativos;

	// pedir numeros dentro del bloque
	
	// asignar signo de cada numero

	// acumular numero en el acumulador correspondiente

	//mostrar resultados


}//FIN DE LA FUNCIÓN