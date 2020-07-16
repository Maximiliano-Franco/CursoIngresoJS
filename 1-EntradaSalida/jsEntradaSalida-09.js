/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	// para calcular el nuevo sueldo deberia sumarle al sueldo original el aumento
	// el calculo de porcentaje lo consigo multiplicando el valor por el porcentaje
	let sueldo;
	let nuevoSueldo;
	let aumento;

	sueldo = parseFloat (document.getElementById("txtIdSueldo").value);

	aumento = sueldo * 0.1;

	nuevoSueldo = sueldo + aumento

	/* alert (Math.ceil(10)); "ceil" redondea hacia arriba
	   alert (Math.floor(10)); "floor" redondea hacia abajo
	   alert (Math.round(10)); "round" redondea hacia el mas cercano 
	*/

	document.getElementById("txtIdResultado").value = nuevoSueldo;
}
