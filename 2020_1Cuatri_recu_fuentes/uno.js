

		//2020 parcial recuperatorio 1 // testeado
/*
Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total*/



function mostrar()
{

	var productoIngresado;
	var precioIngresado;
	var cantidaIngresada;
	var marca;
	var fabricante;
	var contadorJabon;
	var contadorBarbijo;
	var contadorAlcohol;
	var sumadorAlcohol;
	var sumadorJabon;
	var sumadorBarbijo;
	var precioJabonMasCaro;
	var cantidadJabonMasCaro;
	var fabricanteJabonMasCaro;
	var productoMasUnidades;
	var promedioXcompra;

	banderaJabonCaro=0;
	contadorProducto=0;
	contadorAlcohol=0;
	contadorBarbijo=0;
	contadorJabon=0;
	sumadorBarbijo=0;
	sumadorJabon=0;
	sumadorAlcohol=0;

	while(contadorProducto<5)
	{

	productoIngresado=prompt("Ingrese el producto");

		while(isNaN(productoIngresado)==false || productoIngresado !="barbijo" && productoIngresado != "alcohol" && productoIngresado != "jabon")
		{
			productoIngresado=prompt("E# Ingrese un producto valido");
		}
 	
 	precioIngresado=prompt("Ingrese el precio del producto");
 	precioIngresado=parseInt(precioIngresado);

		while(isNaN(precioIngresado)==true || precioIngresado < 100 || precioIngresado >300 )
		{
			precioIngresado=prompt("E# Ingrese un precio valido");
			precioIngresado=parseInt(precioIngresado);
		}

	cantidaIngresada=prompt("Ingrese la cantidad del producto");
	cantidaIngresada=parseInt(cantidaIngresada);

		while(isNaN(cantidaIngresada)==true || cantidaIngresada < 1 || cantidaIngresada >1000)
		{
			cantidaIngresada=prompt("E# Ingrese una cantidad valida");
			cantidaIngresada=parseInt(cantidaIngresada);

		}
	marca=prompt("Ingrese el marca");

		while(isNaN(marca)==false )
		{
			marca=prompt("E# Ingrese un marca valido");
		}

	fabricante=prompt("Ingrese el fabricante");

		while(isNaN(fabricante)==false )
		{
			fabricante=prompt("E# Ingrese un fabricante valido");
		}
			
		switch(productoIngresado)
		{
			case"jabon":

					contadorJabon=contadorJabon+cantidaIngresada;
					sumadorJabon=sumadorJabon+1;
		
    		if(banderaJabonCaro == 0 || precioIngresado > precioJabonCaro)
						{
							precioJabonCaro = precioIngresado;
							fabricanteJabonMasCaro = fabricante;		//estructura producto mas caro
							cantidadJabonCaro = cantidaIngresada;		//estruccutra producto mas barato 
																		//precio ingresado<precio mas barato
							banderaJabonCaro = 1; 
						}
			break;
			case"barbijo":

					contadorBarbijo=contadorBarbijo+cantidaIngresada;
					sumadorBarbijo=sumadorBarbijo+1;
			break;
			case"alcohol":

					contadorAlcohol=contadorAlcohol+cantidaIngresada;
					sumadorAlcohol=sumadorAlcohol+1;
			break;

		}//llave cierre switch
				
				contadorProducto=contadorProducto+1;
	}//llave cierre while contador 
	
			if (contadorJabon>contadorBarbijo)
				 {	
				 	promedioXcompra=contadorJabon/sumadorJabon;
					productoMasUnidades="jabon";
				 	
				 }else
				 	{
				 		if (contadorBarbijo>contadorAlcohol)
				 		 {
				 		 	promedioXcompra=contadorBarbijo/ sumadorBarbijo;
				 		 	productoMasUnidades="barbijo";
				 		 	
				 		 }else
				 		 {
				 		 	promedioXcompra=contadorAlcohol/ sumadorAlcohol;
				 		 	productoMasUnidades="alcohol";
				 		 }
					}


		console.log(" el jabon mas caro es " +precioJabonCaro+ " del fabricante " +fabricanteJabonMasCaro+ " con" +cantidadJabonCaro+ " unidaddes");

		console.log("el producto con mas unidades es " +productoMasUnidades+ " y el promedio por compra es " +promedioXcompra);

		console.log("cantidad total de barbijos : " +contadorBarbijo );


}// llave de cierre codigo

