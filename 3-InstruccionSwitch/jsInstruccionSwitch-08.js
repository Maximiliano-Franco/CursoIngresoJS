function mostrar()
{
	let destino;
	destino = document.getElementById("txtIdDestino").value;

	/*if ((destino== "Bariloche") || (destino== "Ushuaia")){
		alert ("Si vas a este destino pasaras Frio");
	}
	else {
		alert ("Si vas a este destino pasaras Calor");
	}*/

	switch (destino){
		case "Bariloche":
		case "Ushuaia":
			alert ("Si vas a este destino pasaras Frio");
		break;

		case "Cataratas":
		case "Mar del plata":
			alert ("Si vas a este destino pasaras Calor");
		break;
		
	}

}