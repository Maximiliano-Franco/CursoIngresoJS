function mostrar()
{
	let aleatorio;
	let minimo = 1;
	let maximo = 10;

	
	aleatorio = Math.round(Math.random() * (maximo-minimo) + minimo);

	aleatorio = parseInt(aleatorio);

	if (aleatorio <= 4){
		alert(aleatorio + ": Vamos, la proxima se puede");
	}
	else if (aleatorio >= 4 && aleatorio <= 8){
		alert(aleatorio + ": APROBÓ");
	}
	else {
		alert(aleatorio + ": EXCELENTE");
	}

}