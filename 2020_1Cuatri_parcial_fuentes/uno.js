

/* parcial 2020 numero 1

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

Curso de ingreso UTN FRA*/

function mostrar() {
	var tipoProducto;
	var precioIngresado;
	var cantidadIngresada;
	var marca;
	var fabricante;
	//a
	var banderaPuntoA;
	var alcoholMasBArato;
	var cantidadAlcoholMasbarato;
	var fabricanteAlcoholBarato;
	//b
	var promedioAlcohol;
	var promedioJabon;
	var promedioBarbijo;
	var contadorAlcohol;
	var contadorJabon;
	var contadorBarbijo;
	var sumadorAlcohol;
	var sumadorJAbon;
	var sumadorBArbijo;

	contadorAlcohol = 0;
	contadorJabon = 0;
	contadorBarbijo = 0;
	sumadorAlcohol = 0;
	sumadorJAbon = 0;
	sumadorBArbijo = 0;
	contadorVuelta = 0;
	banderaPuntoA = 0;


	while (contadorVuelta > 5) {

		tipoProducto = prompt("Ingrese el  tipo producto barbijo-jabon-alcohol");

		while (isNaN(tipoProducto) == false || tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol") {
			tipoProducto = prompt("Error# Ingrese el  tipo producto  nuevamente  barbijo-jabon-alcohol");
		}

		precioIngresado = prompt("Ingrese el precio  (100-300)");
		precioIngresado = parseInt(precioIngresado);

		while (isNaN(precioIngresado) == true || precioIngresado < 100 || precioIngresado > 300) {
			precioIngresado = prompt("Error# Ingrese  el precio   valida  (100-300)");
			precioIngresado = parseInt(precioIngresado)
		}

		cantidadIngresada = prompt("Ingrese la cantidad  requerida (0-1000)");
		cantidadIngresada = parseInt(cantidadIngresada);

		while (isNaN(cantidadIngresada) == true || cantidadIngresada < 0 || cantidadIngresada > 1000) {
			cantidadIngresada = prompt("Error# Ingrese una cantidad  valida  (0-1000)");
			cantidadIngresada = parseInt(cantidadIngresada)
		}

		marca = prompt("Ingrese la marca  del producto");

		while (isNaN(marca) == false) {
			marca = prompt("Error# Ingrese la marca del producto ");
		}
		fabricante = prompt("Ingrese el fabricante del producto");

		while (isNaN(fabricante) == false) {
			fabricante = prompt("Error# Ingrese el fabricante del producto ");
		}





		//b

		switch (tipoProducto) {
			case "barbijo":
				contadorBarbijo++;
				sumadorBArbijo = sumadorBArbijo + cantidadIngresada;

				break;

			case "jabon":

				contadorJabon++;
				sumadorJAbon = sumadorJAbon + cantidadIngresada;


				break;

			case "alcohol":
				contadorAlcohol++;
				//B
				sumadorAlcohol = sumadorAlcohol + cantidadIngresada;

				//A
				if (banderaPuntoA == 0 || precioIngresado < alcoholMasBArato) {
					alcoholMasBArato = precioIngresado;
					cantidadAlcoholMasbarato = cantidadIngresada;
					fabricanteAlcoholBarato = fabricante;

					banderaPuntoA = 1;
				}

				break;
		}




	}//ffin while

	//a
	if (banderaPuntoA > 0) {
		console.log("la cantidad y fabricante de alcohol mas barato es ; " + cantidadAlcoholMasbarato + "y" + fabricanteAlcoholBarato + "respecticamente");
	} else {
		console.log("no se ingresaron datos");
	}
	//b 
	if (sumadorBArbijo > sumadorJAbon && sumadorBArbijo > sumadorAlcohol) {
		promedioBarbijo = sumadorBArbijo / contadorBarbijo;
		console.log("el tipo con mas unidades son barbijos ,promedio por compra es " + promedioBarbijo);
	} else {

		if (sumadorJAbon > sumadorAlcohol) {
			promedioJabon = sumadorJAbon / contadorJabon;
			console.log("el tipo con mas unidades son jabones,el promedio por compra es" + promedioJabon);
		} else {
			promedioAlcohol = sumadorAlcohol / contadorAlcohol;
			console.log("el tipo con mas unidades es Alcohol, el promedio por compra es;" + promedioAlcohol);
		}

	}

	




}// llave final ejercicio