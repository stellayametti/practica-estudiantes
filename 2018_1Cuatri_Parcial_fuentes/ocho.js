/*Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 
(validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.*/



function mostrar()

	
{
	var letraIngresada;
	var numeroIngresado;
	var contadorNumerosPares;
	var contadorNumerosImpares;
	var contadorCero;
	var continuar;
	var promedioNumerosPositivos;
	var contadorNumerosPositivos;
	var sumadorDenumerospositivos;
	var contadorNumerosNegativos;
	var sumadorDenumerosNegativos;
	var numeroMaximo;
	var letraMaxima;
	var numeroMinimo;
	var letraMinima;


	continuar="si";
	contadorNumerosPares=0;
	contadorNumerosImpares=0;
	contadorCero=0;
	contadorNumerosPositivos=0;
	contadorNumerosNegativos=0;
	sumadorDenumerospositivos=0;
	sumadorDenumerosNegativos=0;
	banderaNumeroMaximo=0;
	banderaNumeroMinimo=0;


	while(continuar=="si")
	{

	letraIngresada=prompt("ingrese una letra valida");
		while(isNaN(letraIngresada)==false)
		{
			letraIngresada=prompt("ingrese una letra valida");
		}

	numeroIngresado=prompt("ingrese un numero valido ");
	numeroIngresado=parseInt(numeroIngresado);

	while(isNaN(numeroIngresado)==true || numeroIngresado<-100 || numeroIngresado >100)
	{
			numeroIngresado=prompt("ingrese un numero valido ");
			numeroIngresado=parseInt(numeroIngresado);
	}


			if (numeroIngresado%2==0)
			{

				contadorNumerosPares=contadorNumerosPares+1;

			}else
			{
				contadorNumerosImpares=contadorNumerosImpares+1;		
			}


			if (numeroIngresado==0) 
			{
				contadorCero=contadorCero+1;		
			}


			if(numeroIngresado>-100 && numeroIngresado <0)
			{
				sumadorDenumerosNegativos=(sumadorDenumerosNegativos)+(numeroIngresado);
			}


			if (numeroIngresado>+0)
			{	
				sumadorDenumerospositivos=sumadorDenumerospositivos+numeroIngresado;
				contadorNumerosPositivos=contadorNumerosPositivos+1;

			}

	//numero y letra maxima		

			if(banderaNumeroMaximo == 0 || numeroIngresado > numeroMaximo)
						{
							numeroMaximo = numeroIngresado;
							letraMaxima = letraIngresada;
							
							banderaNumeroMaximo = 1; 
						}
	// numero  y letra minima

			if(banderaNumeroMinimo == 0 || numeroIngresado < numeroMinimo)
						{
							numeroMinimo = numeroIngresado;
							letraMinima = letraIngresada;
							
							banderaNumeroMinimo = 1; 
						}

		continuar=prompt("desea continuar?")
	}//llave cierre while
	
					promedioNumerosPositivos=sumadorDenumerospositivos/contadorNumerosPositivos


	console.log( "la cantidad de numeros pares es " +contadorNumerosPares );

	console.log( " la cantidad de numeros impares es " +contadorNumerosImpares);
	
	console.log( "la cantidad de ceros es : " +contadorCero );

	console.log( " el promedio de todos los numeros positivos es  " +promedioNumerosPositivos);

	console.log( " la suma de todos los numeros negativos es: " +sumadorDenumerosNegativos);

	console.log(" letra maxima es :" +letraMaxima+ " y "+numeroMaximo+" y la letra minima es " +letraMinima +" con el numero "+numeroMinimo);



}//llave cierre funcion
