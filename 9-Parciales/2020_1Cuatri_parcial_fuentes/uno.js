
function mostrar()
{
	// declaracion de variables
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let acumuladorBarbijo = 0;
	let acumuladorAlcohol = 0;
	let acumuladorJabon = 0;
	let contBarbijo = 0;
	let contAlcohol = 0;
	let contJabon = 0;
	let precioAlcoholBarato;
	let cantidadAlcoholBarato;
	let fabricanteAlcoholBarato;
	let promedioCompra;
	let mayorTipo;
	let flagAlcohol = 0;
	let mensajeAlcohol = "No se compraron alcoholes";
	let mensajeB;
	let mensajeJabon;



	// tengo que generar un bucle que se repita 5 veces
	// (tipo, precio, cantidad, marca, fabricante) valido segun corresponda
	// (utilizo for porque se de antemano cantidad de repeticiones)

	for(let i = 0; i < 5; i++){
		
		tipo = prompt('Ingrese tipo "barbijo", "jabon" o "alcohol": ');
		while (tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol") {
			tipo = prompt('Tipo invalido. Ingrese tipo "barbijo", "jabon" o "alcohol": ');
		}
		
		precio = parseFloat(prompt("Ingrese precio ($100-$300): "));
		while (precio < 100 || precio > 300 || isNaN(precio)) {
			precio = parseFloat(prompt("Error. Ingrese precio ($100-$300): "));
	
		}
		
		cantidad = parseFloat(prompt("Ingrese cantidad (max. 1000): "));
		while (!(cantidad > 0 && cantidad <= 1000)) {
			cantidad = parseFloat(prompt("Error. Ingrese cantidad (max. 1000): "));	
		}
		marca = prompt("Ingrese marca: ");
		fabricante = prompt ("Ingrese fabricante: ");
		
	

		// A - reconocer si el producto es alcohol y recordar precio, cantidad y fabricante de menor precio
		// B - acumular cantidades de unidades de cada tipo y la cantidad tipo de producto para sacar el promedio de compra de acumulador mayor
		// C - acumular cantidad de jabones

		switch (tipo) {

			case "alcohol":
				acumuladorAlcohol += cantidad;
				contAlcohol++;

				if (flagAlcohol == 0 || precioAlcoholBarato > precio){
					precioAlcoholBarato = precio;
					cantidadAlcoholBarato = cantidad;
					fabricanteAlcoholBarato = fabricante;
				}
				break;

			case "barbijo":
				acumuladorBarbijo += cantidad;
				contAlcohol++;
				break;
			
			case "jabon":
				acumuladorJabon += cantidad;
				contAlcohol++;
				break;
		}	
	}

	if(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon) {
		mayorTipo = "alcohol";
		promedioCompra = acumuladorAlcohol / contAlcohol;

	} else if (acumuladorBarbijo >= acumuladorAlcohol && acumuladorBarbijo > acumuladorJabon) {
		mayorTipo = "barbijo";
		promedioCompra = acumuladorBarbijo / contBarbijo;

	} else if (acumuladorJabon > acumuladorBarbijo && acumuladorJabon > acumuladorAlcohol){
		mayorTipo = "jabon";
		promedioCompra = acumuladorJabon / contJabon;	
	}

	if(flagAlcohol == 1){
		mensajeAlcohol = "A- Fabricante alcohol barato " + fabricanteAlcoholBarato +
		"\nCantidad: " + cantidadAlcoholBarato +
		"\nPrecio: " + precioAlcoholBarato;
	}

	mensajeb = "B- Tipo con mas unidades: " + mayorTipo + "Promedio: " + promedioCompra;
	mensajeJabon = "C- Unidades de jabon: "	+ acumuladorJabon;

	alert(mensajeAlcohol + "\n" + mensajeB + "\n" + mensajeJabon);


}