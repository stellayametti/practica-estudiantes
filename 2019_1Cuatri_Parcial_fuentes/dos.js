function mostrar()
{
  
  var nombreElla
  var pesoElla

  var nombreEl
  var pesoEl
  

  nombreElla =prompt("Ingrese nombre de la mujer");
  nombreEl   =prompt("Ingrese nombre de el hombre ");

  pesoElla =parseFloat(prompt("Ingrese peso en kg. de la mujer"));
  pesoEl   =parseFloat(prompt("Ingrese peso en kg. de el hombre "));

  sumakilos=pesoElla+pesoEl

  promediokilos=sumakilos/2

  alert("Ustedes se llaman "+nombreElla+ " y " + nombreEl+ " ,y pesan " +pesoElla+" y "+pesoEl+ ",respectivamente , el peso total de los dos es de " +sumakilos+"  y el promedio es de "+promediokilos+ " kilos.");



}
