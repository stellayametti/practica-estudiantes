Estructuras



// validar el ingreso de palabras 

		productoIngresado=prompt("Ingrese el producto arena-cal- cemento");

		while(isNaN(productoIngresado)==false || productoIngresado !="arena" && productoIngresado!="cal" && productoIngresado!="cemento")
		{
		productoIngresado=prompt("E# Ingrese el producto  nuevamente arena-cal- cemento");
		}


	

// validad el ingrso de numeros

	cantidadIngresada=prompt("Ingrese la cantidad requerida");
				cantidadIngresada=parseInt(cantidadIngresada);

				while(isNaN(cantidadIngresada)==true || cantidadIngresada <1)
				{
				cantidadIngresada=prompt("E# Ingrese una cantidad valida");
				cantidadIngresada=parseInt(cantidadIngresada)
				}

//  validar sexo ingresado

	sexoIngresado=prompt("Ingrese su sexo f / m ");

				while(isNaN(sexoIngresado)==false || sexoIngresado !="f" && sexoIngresado!="m")
				{
				sexoIngresado=prompt("Ingrese su sexo f / m ");
				}

// edad con rangos
	edadIngresada = prompt(" Ingrese edad");
	edadIngresada = parseInt(edadIngresada);
	while (isNaN(edadIngresada) == true || edadIngresada <1 || edadIngresada >90)
			{
				edadIngresada = prompt("Error,  ingrese su edad");
				edadIngresada = parseInt(edadIngresada);
			}



	edadIngresada = prompt(" Ingrese edad");
	edadIngresada = parseInt(edadIngresada);
		if (sexoIngresado == "f")
		{
			while (isNaN(edadIngresada) == true || edadIngresada <13 || edadIngresada >17)
			{
				edadIngresada = prompt("Error, usted no es adolecente, ingrese su edad");
				edadIngresada = parseInt(edadIngresada);
			}
	
	// buscar mayor

		if(banderaMayorTemperatura == 0 || temperaturaCorporal > temperaturaMaxima)
					{
						temperaturaMaxima = temperaturaCorporal;
						nombreMayorTemperatura = nombreIngresado;
							
						banderaMayorTemperatura = 1; 
					}

	//buscamenor

	if(banderaHombreMasBajito == 0 || alturaIngresada < alturaHombreMasBajito)
					{
						alturaHombreMasBajito = alturaIngresada;
						nombreHombreMasBajito = nombreIngresado;

						banderaHombreMasBajito = 1;
						}

////estructuras dos*/


if(numeroIngresado%2==0)			// cuando es numero par 
									//menor de los numeros par
	{
		if(banderaNumeroPar==0)
		{	
			{
				menorNumeroParIngresado= numeroIngresado;

				banderaNumeroPar=1;
			}
			else
			{
				if(numeroIngresado<menorNumeroParIngresado)			

					menorNumeroParIngresado=numeroIngresado;
			}
		}
			
	}

	if(numeroIngresado<0)
	{											//cuando es numero negativo
		

			if(banderaNumeroNegativo=0)
			{
				mayorNumeroNegativo=numeroIngresado;

				banderaNumeroNegativo=0
			}
				 else					cuando es el mayor de   if (numeroIngresado >mayorNumeroNegativo)
										los numeros negativos

						{
							if (numeroIngresado >mayorNumeroNegativo)
							{

							mayorNumeroNegativo=numeroIngresado;

							}
						}

	}


	//	switch de tres

		switch()
					{
					case" ":
																	
					break;
		
					case" ":		
		
					break;
		
					case" ":
																			
					break;
					}


	// console.log de 4


	console.log( " " );

	console.log( " " );
	
	console.log( " " );

	console.log( " ");

   //for cantidad

for(contadorProducto=0;contadorProducto<5;contadorProducto++)


//comparardor mayo cantidad

	if (sumadorAlcohol>sumadorJabon&&sumadorAlcohol>sumadorBarbijo) 
			{
				promedioPorCompraMasUnidades=sumadorAlcohol/contadorAlcohol;
				console.log(" Del tipo con mas unidades es alcohol, el promedio por compra"+promedioPorCompraMasUnidades);
			}else
			{
 				if (sumadorJabon>sumadorBarbijo) 
				{
				promedioPorCompraMasUnidades=sumadorJabon/contadorJabon;
				console.log(" Del tipo con mas unidades es jabon, el promedio por compra"+promedioPorCompraMasUnidades);

				}else
				{
				promedioPorCompraMasUnidades=sumadorBarbijo/contadorBarbijo;
				console.log(" Del tipo con mas unidades es barbijo, el promedio por compra"+promedioPorCompraMasUnidades);
				}

