/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//FIXME: Siempre declarar las variables al principio del codigo
 	let nombre;
 	let edad;

 	nombre= document.getElementById("txtIdNombre").value;
 	edad= document.getElementById("txtIdEdad").value;

	// Esta es la forma concatenando strings y variables
	alert ("usted se llama " + nombre + " y tiene " + edad + " años ");

	// Esta es la forma utilizando string template
	alert (`Usted se llama ${nombre} y tiene ${edad} años`);

}

