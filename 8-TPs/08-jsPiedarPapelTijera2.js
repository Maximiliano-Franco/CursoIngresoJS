var eleccionMaquina;
var contadorEmpates=0;
var contadorGanadas=0;
var contadorPerdidas=0;

function comenzar()
{
	eleccionMaquina = Math.round(Math.random() * 2 + 1);

    eleccionMaquina = parseInt(eleccionMaquina);
    
    switch(eleccionMaquina){
        case 1:
            eleccionMaquina = "piedra"
            break;

        case 2:
            eleccionMaquina = "papel"
            break;

        case 3:
            eleccionMaquina = "tijera"
            break;
	}
}
function piedra()
{
	if(eleccionMaquina == "piedra"){
		alert("Empate!");
		contadorEmpates++;
		document.getElementById("txtIdEmpatadas").value = "Juegos Empatados: " + contadorEmpates;
            
	}
	
    else if (eleccionMaquina == "papel"){
		alert("Perdiste, saque papel!");
		contadorPerdidas++;
		document.getElementById("txtIdPerdidas").value = "Juegos perdidos: " + contadorPerdidas;
	}
	
    else {
		alert("Ganaste, saque tijera!");
		contadorGanadas++;
		document.getElementById("txtIdGanadas").value = "Juegos Ganados: " + contadorGanadas;
    }

}
function papel()
{
	if(eleccionMaquina == "papel"){
		alert("Empate!");
		contadorEmpates++;
		document.getElementById("txtIdEmpatadas").value = "Juegos Empatados: " + contadorEmpates;
            
	}

	else if (eleccionMaquina == "tijera"){
		alert("Perdiste, saque tijera!");
		contadorPerdidas++;
		document.getElementById("txtIdPerdidas").value = "Juegos perdidos: " + contadorPerdidas;
	}

	else {
		alert("Ganaste, saque piedra!");
		contadorGanadas++;
		document.getElementById("txtIdGanadas").value = "Juegos Ganados: " + contadorGanadas;
	}

}
function tijera()
{	if(eleccionMaquina == "tijera"){
		alert("Empate!");
		contadorEmpates++;
		document.getElementById("txtIdEmpatadas").value = "Juegos Empatados: " + contadorEmpates;
            
	}

	else if (eleccionMaquina == "piedra"){
		alert("Perdiste, saque piedra!");
		contadorPerdidas++;
		document.getElementById("txtIdPerdidas").value = "Juegos perdidos: " + contadorPerdidas;
	}

	else {
		alert("Ganaste, saque papel!");
		contadorGanadas++;
		document.getElementById("txtIdGanadas").value = "Juegos Ganados: " + contadorGanadas;
	}
	
}

function mostrarResultado()
{
	document.getElementById("txtIdGanadas").value = contadorGanadas;
	document.getElementById("txtIdPerdidas").value = contadorPerdidas;
	document.getElementById("txtIdEmpatadas").value = contadorEmpates;
}