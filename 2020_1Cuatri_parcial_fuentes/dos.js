

/*

   //Altamirano parcial 2020 numero 2 // testeado ok


/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la
 construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
c) Informar el tipo con mas cantidad de bolsas.
d) El tipo mas caro*/



function mostrar()
{
	var productoIngresado;
	var cantidadDeBolsasIngresadas;
	var precioPorBolsa;
//a
	var importeTotalPagar;
//b 
	var importeTotalPagarDto;
	var sumadorTotalBolsas;
//c 
	var sumadorBolsaArena;
	var sumadorBolsaCal;
	var sumadorBolsaCemento;
//d
	var precioProductoMasCaro;
	var productoMasCaro;
	var banderaPuntoD; 

	sumadorTotalBolsas=0;
	sumadorBolsaArena=0;
	sumadorBolsaCal=0;
	sumadorBolsaCemento=0;
	continuar="si"
	banderaPuntoD=0;



	while(continuar=="si")
	{
		productoIngresado=prompt("Ingrese el producto arena-cal- cemento");

			while(isNaN(productoIngresado)==false || productoIngresado !="arena" && productoIngresado!="cal" && productoIngresado!="cemento")
			{
			productoIngresado=prompt("E# Ingrese el producto  nuevamente arena-cal- cemento");
			}
		
		cantidadDeBolsasIngresadas=prompt("Ingrese la cantidad ");
		cantidadDeBolsasIngresadas=parseInt(cantidadDeBolsasIngresadas);

				while(isNaN(cantidadDeBolsasIngresadas)==true || cantidadDeBolsasIngresadas <1)
				{
				cantidadDeBolsasIngresadas=prompt("E# Ingrese una cantidad valida");
				cantidadDeBolsasIngresadas=parseInt(cantidadDeBolsasIngresadas)
				}

		precioPorBolsa=prompt("Ingrese el precio");
		precioPorBolsa=parseInt(precioPorBolsa);

				while(isNaN(precioPorBolsa)==true || precioPorBolsa <1)
				{
				precioPorBolsa=prompt("E# Ingrese el precio");
				precioPorBolsa=parseInt(precioPorBolsa)
				}


				sumadorTotalBolsas=sumadorTotalBolsas+cantidadDeBolsasIngresadas;
//b
				if (sumadorTotalBolsas>30)
				 {
				 	descuento=25
				 }else
				 {
				 	if (sumadorTotalBolsas>10)
				 	 {
				 	 	descuento=15
				 	 }else
				 	 	(
				 	 		descuento=0
				 		)
				 }
//C 			
				switch(productoIngresado)
						{
						case"arena":
									sumadorBolsaArena=sumadorBolsaArena+cantidadDeBolsasIngresadas;								
						break;

						case"cal":		
									sumadorBolsaCal=sumadorBolsaCal+cantidadDeBolsasIngresadas;								

						break;

						case"cemento":
									sumadorBolsaCemento=sumadorBolsaCemento+cantidadDeBolsasIngresadas;								
											
						break;
						}
				


//D
					if(banderaPuntoD == 0 || precioPorBolsa < productoMasCaro)
					{
						precioProductoMasCaro = precioPorBolsa;
						productoMasCaro = productoIngresado;

						banderaPuntoD = 1;

						}



						continuar=prompt("desea continuar?")
	}//llave cierre del while


		if (sumadorBolsaArena>sumadorBolsaCal&&sumadorBolsaArena>sumadorBolsaCemento)
					 {
					 	console.log("mas cantidad de bolsas es ARENA");
					 }else
					 {
					 	if (sumadorBolsaCal>sumadorBolsaCemento)
					 	 {
					 		console.log("mas cantidad de bolsas es CAL");
					 	 }else
						 	 {
						 	 	console.log("mas cantidad bolsa CEMENTO")
						 	 }
					 }



		importeTotalPagar=cantidadDeBolsasIngresadas*precioPorBolsa;


		importeTotalPagarDto=importeTotalPagar-(importeTotalPagar*descuento/100);



		console.log("EL IMPORTE TOTAL ES DE " +importeTotalPagar+ " CORRESPONDE UN DESCUENTO DE " +descuento+ " % PRECIO FINAL " +importeTotalPagarDto );
		console.log("EL PRODUCTO MAS CARO ES " +productoMasCaro+ " CON UN PRECIO DE " +precioProductoMasCaro);

}//llave cierrer funcion








