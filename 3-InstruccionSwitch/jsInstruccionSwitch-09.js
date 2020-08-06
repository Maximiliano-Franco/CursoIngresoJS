function mostrar()
{
	let estacion;
	let destino;
	let descuento;
	let aumento;
	let importeFinal;
	const IMPORTEBASE = 15000;

	estacion = document.getElementById("txtIdEstacion").value;
	destino = document.getElementById("txtIdDestino").value;

	if (estacion== "Invierno"){
		switch (destino){
			case "Bariloche":
				aumento = IMPORTEBASE * 0.2;
				importeFinal = IMPORTEBASE + aumento;
				break;
	
			case "Cataratas":
			case "Cordoba":
				descuento = IMPORTEBASE * 0.1;
				importeFinal = IMPORTEBASE - descuento;
				break;
	
			case "Mar del plata":
				descuento = IMPORTEBASE * 0.2;
				importeFinal = IMPORTEBASE - descuento;
				break;	
		}
		
	}

	else if (estacion== "Verano"){
		switch (destino){
			case "Bariloche":
				descuento = IMPORTEBASE * 0.2;
				importeFinal = IMPORTEBASE - descuento;
				break;
	
			case "Cataratas":
			case "Cordoba":
				aumento = IMPORTEBASE * 0.1;
				importeFinal = IMPORTEBASE + aumento;
				break;
	
			case "Mar del plata":
				aumento = IMPORTEBASE * 0.2;
				importeFinal = IMPORTEBASE + aumento;
				break;
		}	
		
	}	
	
	else {
		switch (destino){
			case "Cordoba":
				importeFinal = IMPORTEBASE
				break;

			default:
				aumento = IMPORTEBASE * 0.1;
				importeFinal = IMPORTEBASE + aumento;
		}
		
	}
	alert ("El viaje que eligio tiene un costo de " + importeFinal);
}