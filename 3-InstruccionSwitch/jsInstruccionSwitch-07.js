function mostrar()
{
	let destino;
	destino = document.getElementById("txtIdDestino").value;

	/*if(destino== "Bariloche"){
		alert ("Oeste");
	}
	else if(destino== "Cataratas"){
		alert ("Norte");
	}
	else if(destino== "Ushuaia"){
		alert ("Sur");
	}
	else {
		alert ("Este");
	}*/

	switch (destino){
		case "Bariloche":
			alert ("Oeste");
			break;

		case "Cataratas":
			alert ("Norte");
			break;
		
		case "Ushuaia":
			alert ("Sur");
			break;

		case "Mar del plata":
			alert ("Este");
			break;
		
	}
}