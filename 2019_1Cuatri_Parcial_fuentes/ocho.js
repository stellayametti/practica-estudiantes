/**Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar 
entre 0 y 250) , el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.*/

function mostrar() {
	let contJugadores = 0;
	let altura;
	let sexoIngresado;
	let sumAlturas = 0;
	let promedioAlturas;
	let banderaPuntoB;
	let alturaMasBaja;
	let sexoMasBaja;
	let contMujeres190 = 0;



	for (contJugadores = 0; contJugadores < 5; contJugadores++) {


		altura = prompt("Ingrese la altura (0-250)");
		altura = parseFloat(altura);

		while (isNaN(altura) == true || altura < 0 || altura > 250) {
			altura = prompt("Error# Ingrese la altura (0-250)");
			altura = parseFloat(altura)
		}

		sexoIngresado = prompt("Ingrese el sexo f-m");

		while (isNaN(sexoIngresado) == false || sexoIngresado != "f" && sexoIngresado != "m") {
			sexoIngresado = prompt("Error# Ingrese el sexo f-m");
		}

		sumAlturas = sumAlturas + altura;

		if (banderaPuntoB == 0 || altura < alturaMasBaja) {
			alturaMasBaja = altura;
			sexoMasBaja = sexoIngresado;

			banderaPuntoB = 1;
		}

		if (altura > 190 && sexoIngresado == "f") {
			contMujeres190++;

		}






	}//for
	if (sumAlturas > 0) {
		promedioAlturas = sumAltura / contJugadores;
		console.log("el promedio de alturas es: " + promedioAlturas);
	}
	else {
		console.log("no se ingresaron datos");
	}

	if (banderaPuntoB) {

		console.log("la altura de la persona mas baja es: " + alturaMasBaja + "y su sexo es: " + sexoMasBaja);
	}
	else {
		console.log("no se ingresaron datos");

	}
	if (contMujeres190>0) {
		console.log("la cantidad de mujeres que supera el 190 son: "+contMujeres190);
		
	}
	else{
		console.log("no se ingresaron datos");
	}
}//ejercicio
