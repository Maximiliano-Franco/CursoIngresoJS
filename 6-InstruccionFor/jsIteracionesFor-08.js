function mostrar()
{

	let numero;
	let flag = 0;

	numero = parseInt(prompt("Ingrese un numero: "));

	while(isNaN(numero)){
		numero = parseInt(prompt("Eso no es un numero. Ingrese un numero: "));
	}

	for (let i = 2; i < numero; i++) {

		if (numero % i == 0)  {
			flag = 1;
			break;
		}
	}

	if (flag == 1 || numero == 1 ) {
		alert(numero + " no es primo");
	}
	else {
		alert(numero + " es primo");
	}

}