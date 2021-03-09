
//
/*Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar 
entre 0 y 250) , el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.*/


function mostrar()
{

	var alturaIngresada;
	var sexoIngresado;
	var promedioTotalAlturas;   

	
	var contadorJugadores;
	var sumadorAlturas;
	var contadorVuelta;

	var alturaMasBaja;
	var sexoPersonaMasBaja;
	var banderaPersonaMasBaja;
	var contadorMujeresAlturaSuperior190;

	contadorJugadores=0;
	sumadorAlturas=0;
	contadorVuelta=0;
	banderaPersonaMasBaja=0;
	contadorMujeresAlturaSuperior190=0;


		while(contadorVuelta<5)
		{

			alturaIngresada=prompt("Ingrese la altura en centimetros ");
			alturaIngresada=parseInt(alturaIngresada);

				while(isNaN(alturaIngresada)==true || alturaIngresada <1 || alturaIngresada >250)
				{
				alturaIngresada=prompt("E# Ingrese una altura  valida");
				alturaIngresada=parseInt(alturaIngresada);
				}

			sexoIngresado=prompt("Ingrese su sexo f / m ");

				while(isNaN(sexoIngresado)==false || sexoIngresado !="f" && sexoIngresado!="m")
				{
				sexoIngresado=prompt("Ingrese su sexo f / m ");
				}


				contadorJugadores=contadorJugadores+1;
				sumadorAlturas=sumadorAlturas+alturaIngresada;


			if(banderaPersonaMasBaja == 0 || alturaIngresada < alturaMasBaja)
					{
			
						alturaMasBaja = alturaIngresada;
						sexoPersonaMasBaja = sexoIngresado;

						banderaPersonaMasBaja = 1;
						}

			if(sexoIngresado=="f")
			{
				if(alturaIngresada>190)
				{
					contadorMujeresAlturaSuperior190=contadorMujeresAlturaSuperior190+1
				}
			}




				contadorVuelta=contadorVuelta+1;

		}//cierer while

			promedioTotalAlturas=sumadorAlturas/contadorJugadores;

			alert("el promedio total de alturas es "+promedioTotalAlturas)
			alert("La altura mas baja es" +alturaMasBaja +"y el sexo es;"+sexoPersonaMasBaja);
			alert("la cantida de mujeres altura superior a 190cms es" +contadorMujeresAlturaSuperior190);

}
