



		//ALTAMIRANO LUCAS PARCIAL 2020 NUMERO 1   // testeado ok

/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.  //
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del producto con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/




nivelDeProbresa=prompt("Ingrese el nivel de pobresa entre (pobre, rico , muy rico), recordar que en Europa no hay paises pobre");
//el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)   
switch(continente)
{
    case 'europa':
        while(isNaN(nivelDeProbresa)==false || (nivelDeProbresa!="rico" && nivelDeProbresa!="muy rico"))
        {
            nivelDeProbresa=prompt("Error, ingrese el nivel de pobresa entre (rico , muy rico): ");
        }
        break;

    default:	
        while(isNaN(nivelDeProbresa)==false || (nivelDeProbresa!="pobre" && nivelDeProbresa!="rico" && nivelDeProbresa!="muy rico"))
        {
            nivelDeProbresa=prompt("Error, ingrese el nivel de pobresa entre (pobre, rico , muy rico): ");
        }
        break;

}

	function mostrar()
	{


		//1 ingreso las variables

		var productoIngresado;
		var cantidadIngresada;
		var precioIngresado;
		var contadorProducto;
		var marcaIngresada;
		var fabricanteIngresado;
		var banderaAlcoholBarato;
		var precioAlcoholMasBarato;
		var cantidadAlcoholMasBarato;
		var fabricanteAlcoholMasBarato;
		var contadorBarbijo;
		var sumadorBarbijo;
		var contadorJabones;
		var sumadorJabones;
		var contadorAlcohol;
		var sumadorAlcohol;
		var promedioMayorCantidad;



		contadorProducto=0;
		banderaAlcoholBarato=0;
		contadorBarbijo=0;
		sumadorBarbijo=0;
		contadorJabones=0;
		sumadorJabones=0;
		contadorAlcohol=0;
		sumadorAlcohol=0;

		while(contadorProducto<5)

		{	
		productoIngresado=prompt("Ingrese un producto valido");
			while(isNaN(productoIngresado)==false || productoIngresado !="barbijo" && productoIngresado!="jabon" && productoIngresado!="alcohol")
			{
				productoIngresado=prompt("Error # Ingrese un producto valido");
			}

		cantidadIngresada=prompt("Ingrese la cantidad");
		cantidadIngresada=parseInt(cantidadIngresada); 
			while(isNaN(cantidadIngresada)==true || cantidadIngresada <0 || cantidadIngresada >1000)
			{
				cantidadIngresada=prompt("Error# Ingrese la cantidad");
				cantidadIngresada=parseInt(cantidadIngresada);

			}

		precioIngresado=prompt("Ingrese el precio");
		precioIngresado=parseInt(precioIngresado); 
			while(isNaN(precioIngresado)==true || precioIngresado <100 || precioIngresado >300 )
			{
				precioIngresado=prompt("Error# Ingrese la cantidad");
				precioIngresado=parseInt(precioIngresado);
				
			}

		marcaIngresada=prompt("Ingrese una marca valida");
			while(isNaN(marcaIngresada)==false) 
			{
				marcaIngresada=prompt("Error # Ingrese una marca valida");
			}

		fabricanteIngresado=prompt("Ingrese un fabricante valido");
			while(isNaN(fabricanteIngresado)==false) 
			{
				fabricanteIngresado=prompt("Error # Ingrese un fabricante valido");
			}


				if(banderaAlcoholBarato == 0 || precioIngresado < precioAlcoholMasBarato)
						{
							precioAlcoholMasBarato = precioIngresado;
							cantidadAlcoholMasBarato = cantidadIngresada;
							fabricanteAlcoholMasBarato = fabricanteIngresado;
							
							banderaAlcoholBarato = 1; 
						}

			switch(productoIngresado)
					{
						case"barbijo":
						contadorBarbijo=contadorBarbijo+1;
						sumadorBarbijo=sumadorBarbijo+cantidadIngresada;
					
						break;

						case"jabon":	
						contadorJabones=contadorJabones+1;
						sumadorJabones=sumadorJabones+cantidadIngresada;	

						break;

						case"alcohol":
						contadorAlcohol=contadorAlcohol+1;
						sumadorAlcohol=sumadorAlcohol+cantidadIngresada;
							
						break;
					}

					contadorProducto=contadorProducto+1;

		}//llave while

			if(contadorBarbijo>contadorJabones)
			{
				promedioMayorCantidad=contadorBarbijo/sumadorBarbijo;
			} if (contadorJabones>contadorAlcohol)
			 {
			 	promedioMayorCantidad=contadorJabones/sumadorJabones;
			 }
			 	else
			 	{
			 		promedioMayorCantidad=contadorAlcohol/sumadorAlcohol;
			 	}

				console.log("el alcohol mas barato es" +precioAlcoholMasBarato+   " del fabricante " +fabricanteAlcoholMasBarato+ "y la cantidad de "+cantidadAlcoholMasBarato);
			 	console.log("el promedio de la mayor cantidad es "+promedioMayorCantidad);
			 	console.log("la cantidad de jabones es :" +sumadorJabones);


		
	}//llave cierre funcion
















/*

function mostrar()
{
	
	var productoIngresado;	
	var precioIngresado;
	var cantidadIngresada;
	var marcaIngresada;
	var origenIngresado;
	var precioAlcoholMasBarato;
	var cantidadAlcoholMasBarato;
	var fabricanteAlcoholMasBarato;
	var contadorProducto;
	var contadorAlcohol;
	var sumadorAlcohol;
	var contadorBarbijo;
	var sumadorBarbijo;
	var contadorJabones;
	var sumadorJabones;
	var banderaAlcohol;
	var promedioMayorCantidad;
	var productoMayorCantidad;



	contadorProducto=0;
	contadorAlcohol=0;
	sumadorAlcohol=0;
	contadorBarbijo=0;
	sumadorBarbijo=0;
	contadorJabones=0;
	sumadorJabones=0;
	banderaAlcohol=0;



 	for(contadorProducto=0;contadorProducto<5;contadorProducto++)
 	{

		productoIngresado=prompt("Ingrese tipo de producto");

		while( productoIngresado!="alcohol" &&  productoIngresado!="jabon" && productoIngresado!="barbijo")
   		{
    	productoIngresado=prompt("E# ingrese un tipo valido; alcohol,barbijo,jabon");
		}

		precioIngresado=prompt("ingrese el precio ");
		precioIngresado=parseInt(precioIngresado);

		while(isNaN(precioIngresado)==true || precioIngresado <100 ||precioIngresado>300)
		{
		precioIngresado=prompt("E# ingrese el precio entre $100 y $300");
		precioIngresado=parseInt(precioIngresado);
		}

		cantidadIngresada=prompt("Ingrese la cantidad");
		cantidadIngresada=parseInt(cantidadIngresada);

		while(isNaN(cantidadIngresada)==true || cantidadIngresada <1 || cantidadIngresada>1000)
		{
		cantidadIngresada=prompt(" E# Ingrese la cantidad entre 1 y 1000");
		cantidadIngresada=parseInt(cantidadIngresada);
		}

		
		fabricanteIngresado=prompt("Ingrese fabricante");
		
		while(isNaN(fabricanteIngresado)==false)
		{
			fabricanteIngresado=prompt("Ingrese fabricante nuevamente");
		}	

		marcaIngresada=prompt("Ingrese la marca del producto");

		while(isNaN(marcaIngresada)==false)
		{
			marcaIngresada=prompt("Ingrese marca nuevamente");
		}	


    	switch(productoIngresado)
    	{
    		case"alcohol":

    			contadorAlcohol=contadorAlcohol+1;
    			sumadorAlcohol=sumadorAlcohol+cantidadIngresada;

    			if(banderaAlcohol == 0 || precioIngresado < precioAlcoholMasBarato)
						{
							precioAlcoholMasBarato = precioIngresado;
							fabricanteAlcoholMasBarato = fabricanteIngresado;
							cantidadAlcoholMasBarato =cantidadIngresada;
							
							banderaAlcohol = 1; 
						}
    		break;
    		case"barbijo":
    			contadorBarbijo=contadorBarbijo+1;
    			sumadorBarbijo=sumadorBarbijo+cantidadIngresada;

    		break;
    		case"jabon":
    			contadorJabones=contadorJabones+1;
    			sumadorJabones=sumadorJabones+cantidadIngresada;
    		break;

    			
    	}
			
    	
    }// while cierre contador . primero   	

 		if (sumadorAlcohol>sumadorBarbijo)
 		{
 		
 		 	promedioMayorCantidad=sumadorAlcohol/contadorAlcohol;
 		 	productoMayorCantidad="Alcohol";

 		}else
 			{
 		 		 if (sumadorBarbijo>sumadorJabones)
 		 		{
 		  	
 		  		promedioMayorCantidad=sumadorBarbijo/contadorBarbijo;
 		  		productoMayorCantidad="Barbijo";

 		  		}else
		 		  {
		 		  	promedioMayorCantidad=sumadorJabones/contadorJabones;
		 		  	productoMayorCantidad="Jabones";
		 		  }
			}
 		
 		console.log("el alcohol mas barato es " +precioAlcoholMasBarato+" con una cantidad de " +cantidadAlcoholMasBarato+ " unidades y su fabricante es" +fabricanteAlcoholMasBarato+  ".");
 		console.log("el productoMayorCantidad es " +productoMayorCantidad+" con un promedio de " +promedioMayorCantidad+".");
 		console.log("la cantidad de jabones total es de : "+sumadorJabones+".");
}//fin de la funcion
*/






	/////////  3 //////////

	