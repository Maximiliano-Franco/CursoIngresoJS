/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	// "let" es reemplazo de "var". Se utiliza para variables
	let nombre; 

	// "prompt" es una ventana desplegable que deja introducir informacion, combinado con "alert" da una respuesta
	nombre = prompt ("Ingrese su nombre"); 

	// "alert" es una ventana desplegable que solo arroja una informacion
	alert(nombre); 
}

