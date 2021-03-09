function mostrar()
{

	var planetaIngresado;



	planetaIngresado=prompt("ingrese un planeta Valido del sistema solar ")


	switch(planetaIngresado)
	{

		case"mercurio":
				console.log("planeta #1 ")
		break;
		case"venus":
		console.log("planeta # 2")
		break;
		case"tierra":
		console.log("planeta # 3")

		break;
		case"marte":
		console.log("planeta # 4")
		break;
		case"jupiter":
		console.log("planeta # 5")

		break;		
		case"saturno":
		console.log("planeta # 6")
		break;		
		case"urano":
		console.log("planeta # 7")
		break;		

		case"neptuno":
		console.log("planeta # 8 ")
		break;


		default:
					console.log("no es un planeta valido ")

		break;

	}

	



}
