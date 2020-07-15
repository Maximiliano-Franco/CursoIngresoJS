/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	// Reservo espacio en memoria para guardar el nombre usuario
	let nombre; 

	// Guardo en la variable "nombre" el texto introducido en prompt
	nombre = prompt ("Ingrese su nombre") ; 

	// Copio el nombre que tengo guardado en la variable "nombre" dentro de la caja de texto en el html
	document.getElementById ("txtIdNombre").value = nombre; 

	
}

