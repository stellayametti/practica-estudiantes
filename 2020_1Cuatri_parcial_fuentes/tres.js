


//Lucas Altamirano parcial 2020 3   // testeado ok
/*
Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") 
y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/

function mostrar() {


	var nombreIngresado;
	var edadIngresada;
	var sexoIngresado;
	var estadoCivilIngresado;
	var temperaturaCorporal;

	continuar = "si";

	while (continuar = "si") {
		nombreIngresado = prompt("Ingrese el nombre ");

		while (isNaN(nombreIngresado) == false) {
			nombreIngresado = prompt("E# Ingrese el nombre ");
		}
		edadIngresada = prompt(" Ingrese edad");
		edadIngresada = parseInt(edadIngresada);
		while (isNaN(edadIngresada) == true || edadIngresada < 1 || edadIngresada > 90) {
			edadIngresada = prompt("Error,  ingrese su edad");
			edadIngresada = parseInt(edadIngresada);
		}


	}//final while general


} //llave cierre funcion


