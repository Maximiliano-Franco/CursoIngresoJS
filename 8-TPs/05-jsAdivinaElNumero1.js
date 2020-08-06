/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numSecreto; 
let numIntentos = 0
let flag = 0;


function comenzar()
{

  numSecreto = Math.round(Math.random() * 99 + 1);
	alert( numSecreto );
  flag = 1;
  document.getElementById("txtIdNumero").focus();
  document.getElementById("txtIdIntentos").value = numIntentos;
}

function verificar()
{ 
  let numIngresado;

  if (flag == 0){

  alert ("Se debe presionar primero Comenzar");
}
	else {

    numIngresado = parseInt(document.getElementById("txtIdNumero").value);
    
    numIntentos = numIntentos + 1
    //"numIntentos++" y "NumIntentos += 1" es lo mismo que escribir la linea 38.
    // Al poner ++ se suma 1 y al poner una operacion mas el igual se pisa la variable que teniamos con el resultado de la operacion actual
    
    document.getElementById("txtIdIntentos").value = numIntentos;
    
    if (numSecreto==numIngresado) {
      alert ("Usted es un ganador! y en solo " + numIntentos + " intentos");
      numIntentos = 0;
      flag = 0;
    }

    else if (numSecreto > numIngresado) {
      alert ("Falta...");
    }

    else {
      alert("Se paso...");
    }

    }
    document.getElementById("txtIdNumero").value="";
    document.getElementById("txtIdNumero").focus();
    
  }
	
