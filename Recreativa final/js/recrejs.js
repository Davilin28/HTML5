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

	var numero,
		imagen;

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