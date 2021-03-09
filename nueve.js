




			// ALTAMIRANO LUCAS  EJERCICIO 9 


/*
Bienvenidos.
Realizar el algoritmo que permita ingresar la marca del producto, 
el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.

Testeo con los siguientes valores
(m=pepito;p = 50; t =-300(mal) ,-30(bien) )
(m=teem;p = 10; t =0 )
(m=llut;p = 150(mal), 15(bien); t =-13 )
(m=fpy;p = 45; t =-12 )*/

function mostrar()

{
	var	marcaIngresada
	var pesoIngresado
	var tempIngresada
	var tempPares
	var marcaPesoMax
	var	productosCeroGrados
	var promedioPeso
	var pesoMaximo
	var	pesoMinimo

	var respuesta
	var bandera
	var	contadorPeso
	var acumuladorPeso

	respuesta="si";
	bandera= 1 ;
	contadorPeso= 0 ;
	acumuladorPeso=0 ;
	productosCeroGrados= 0;
	tempPares=0;



	while(respuesta=="si")
	{

		marcaIngresada=prompt("Ingrese marca del producto");

		while(isNaN(marcaIngresada)==false )
		{
			marcaIngresada=prompt("Ingrese marca nuevamente")

		}
		console.log(marcaIngresada)

		pesoIngresado=parseInt(prompt("Ingrese pesaje en kilos"));

		while(isNaN(pesoIngresado)==true || pesoIngresado <0 || pesoIngresado >100)
		{

			pesoIngresado=parseInt(prompt("Ingrese peso 1 - 100 kilos"));

		}

		contadorPeso=contadorPeso+1
		acumuladorPeso=acumuladorPeso +pesoIngresado


		tempIngresada=parseInt(prompt("Ingrese temperatura de almacenamiento -30° a 30 °"));

		while(isNaN(tempIngresada)==true || tempIngresada <-31 || tempIngresada >31)
		{
			tempIngresada=parseInt(prompt("Ingrese un valor valido"));
		}	
		alert("estoya afuera")


		if(bandera=1)
		{
			pesoMaximo=pesoIngresado
			pesoinimo=pesoIngresado
			marcaPesoMax=marcaIngresada

			bandera= 0;
		}

		if(pesoIngresado>pesoMaximo)
		{
			pesoMaximo=pesoIngresado
			marcaPesoMax=marcaIngresada
		}
		if(pesoIngresado<pesoMinimo)
		{
			pesoMinimo=pesoIngresado
		}

		if(tempIngresada%2==0)
	   	{
	        tempPares = tempPares + 1; 
	    }
	    if(tempIngresada<0)
	    {
	        productosCeroGrados = productosCeroGrados + 1; 
	    }

	    respuesta = prompt("desea cargar nuevo producto?");
		

	}


		 promedioPeso=acumuladorPeso/contadorPeso

		 console.log("la cantidad de temperaturas pares es "+tempPares);
		 console.log("la marca del producto mas pesdo es "+marcaPesoMax );
		 console.log("la cantidad de productos que se conservan a -0° "+productosCeroGrados);
		 console.log("la promedio de peso de todos los productos"+promedioPeso);
		 console.log("el peso maximo es " +pesoMaximo+ "y el minimo es  " +pesoMinimo);

}


