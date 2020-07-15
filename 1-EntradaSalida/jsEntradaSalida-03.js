/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre;

	// "getElementById" sirve para tomar una variable de otro documento
	nombre = document.getElementById ("txtIdNombre.value").value ; 

	alert(nombre);

	// Se puede reemplazar el valor de un elemento
	document.getElementById("txtIdNombre").value="" 

}


