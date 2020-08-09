/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
división o multiplicación) para realizar entre estos
dos números, estas operaciones también serán Random.
En el cuadro de texto resultado el jugador debe ingresar
el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
let num1;
let num2;
let operaciones;
let resultado;
let resultadoUser

function comenzar()
{
    operaciones = Math.round(Math.random() * 3+1);
    num1 = Math.round(Math.random() * 9+1);
    num2 = Math.round(Math.random() * 9+1);
    
    switch (operaciones){ 
	    case 1:
            resultado = (num1 + num2);
            operaciones = "+";
	        break;
	      
	    case 2:
            resultado = (num1 - num2);
            operaciones = "-";
	        break;
	      
	    case 3:
            resultado = (num1 * num2);
            operaciones = "x";
	        break;
	      
	    case 4:
            resultado = (num1 / num2);
            operaciones = "/";
	        break;
    }
    

    document.getElementById("txtIdPrimerNumero").value = num1;
    document.getElementById("txtIdSegundoNumero").value = num2;
    document.getElementById("txtIdOperador").value = operaciones;
}

function Responder()
{
    
    resultadoUser = parseInt(document.getElementById("txtIdRespuesta").value);

    if(resultado == resultadoUser){
        alert("El resultado es correcto");
    }
    else {
        alert("El resultado es incorrecto");
    }
    
}
