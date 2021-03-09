
/*Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número 
entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos
( d , -150(mal) , -50(bien))
( z , 0)
( g , 20)
( a , 150(mal) , 0(bien))
( b , 3)
( k , 7)
Curso de ingreso UTN FRA*/
function mostrar()
{
	var numeroIngresado;
	var letraIngresada;

	var contadorNumeroPar;

	continuar="si";
	contadorNumeroPar=0;

	while(continuar=="si")

	{

		
	numeroIngresado=prompt("Ingrese la cantidad requerida");
	numeroIngresado=parseInt(numeroIngresado);

				while(isNaN(numeroIngresado)==true || numeroIngresado <-100 || numeroIngresado >100)
				{
				numeroIngresado=prompt("E# Ingrese una cantidad valida");
				numeroIngresado=parseInt(numeroIngresado)
				}

	letraIngresada=prompt("Ingrese una letra");

				while(isNaN(letraIngresada)==false )
				{
				letraIngresada=prompt("E# Ingrese una letra");
				}


	switch(numeroIngresado)
			{
			case(numeroIngresado%2==0):
					contadorNumeroPar=contadorNumeroPar+1
															
			break;

			case" ":		

			break;

			case" ":
																	
			break;
			}


				continuar=prompt("desea conitnuar ?");
	}// fin while




}
