function Reiniciar() {
	var marActual, 
	       tirActual;

	marActual = document.getElementById('MarcadorActual');
	tirActual = document.getElementById('TiradaActual');

	marActual.innerHTML = "0";
	tirActual.innerHTML = "0";
}
function Guardar() {

	var marActual, 
	       tirActual;

	marActual = document.getElementById('MarcadorActual');
	tirActual = document.getElementById('TiradaActual');

	marActual.innerHTML = parseInt(marActual.innerHTML) + parseInt(tirActual.innerHTML);
}
function CambiarImagen(idImagen) {
	/* idImagen --> Indica la imagen que se quiere cambiar. 
	El valor al ser un id habra que llamarlo con comillas simples '	'*/

	var numero, imagen;

	imagen = document.getElementById(idImagen);	
	numero = Math.floor((Math.random() * 3) + 1);
	
	if (numero == 1) 
		imagen.src = "../imagenes/Sandia.png"
	else
		if (numero == 2)
			imagen.src = "../imagenes/Fresa.png"
		else
			imagen.src = "../imagenes/Limon.png"
}
function CalcularPuntuacion() {
	var imagen1, imagen2, imagen3, puntos, tirActual;

	imagen1 = document.getElementById('imagen1');
	imagen2 = document.getElementById('imagen2');
	imagen3 = document.getElementById('imagen3');

	if ((imagen1.src == imagen2.src) && (imagen2.src == imagen3.src))
	// las tres imagenes son iguales
	puntos = 1000;
	else
		if ( (imagen1.src == imagen2.src) ||
		    (imagen1.src == imagen3.src) ||
		    (imagen2.src == imagen3.src) )
	// Dos imagenes iguales
	puntos = 500;
	else
	// Las tres imagenes distintas.
	puntos = 0

	// Actualizar el contador actual
	tirActual = document.getElementById('TiradaActual');
	tirActual.innerHTML = puntos;
}
function Jugar() {

	CambiarImagen('imagen1');
	CambiarImagen('imagen2');
	CambiarImagen('imagen3');
	CalcularPuntuacion();
}
function CambiarPuntuar(idImagen) {
	CambiarImagen(idImagen);
	CalcularPuntuacion();
}