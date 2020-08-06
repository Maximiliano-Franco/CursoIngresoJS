/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

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
	 
		switch(numIntentos){
			case 1:
				alert("Usted es un psiquico");
				break;
				
			case 2:
				alert("Usted es un psiquico");
				break;
				
			case 3:
				alert("Esto es suerte");
				break;
				
			case 4:
				alert("Excelente tecnica");
				break;

			case 5:
				alert("Usted esta en la media");
				break;	
			case 6:
			case 7:	
			case 8:
			case 9:
			case 10:
				alert("Falta tecnica");
				break;
			default:
				alert("Afortunado en el amor");


		}
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