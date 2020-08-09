/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

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
    }
    else if (eleccionMaquina == "papel"){
        alert("Perdiste, saque papel!");
    }
    else{
        alert("Ganaste, saque tijera!")
    }
}
function papel()
{
    if(eleccionMaquina == "papel"){
        alert("Empate!");
    }
    else if (eleccionMaquina == "tijera"){
        alert("Perdiste, saque tijera!");
    }
    else{
        alert("Ganaste, saque piedra!")
    }

}
function tijera()
{
	if(eleccionMaquina == "tijera"){
        alert("Empate!");
    }
    else if (eleccionMaquina == "piedra"){
        alert("Perdiste, saque piedra!");
    }
    else{
        alert("Ganaste, saque papel!")
    }
}