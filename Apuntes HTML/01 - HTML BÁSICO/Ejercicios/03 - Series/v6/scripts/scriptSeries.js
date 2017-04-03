function Aciertos(idRespuesta,idImagen) 
{
	var p1, /* Parrafo de respuesta */
	    p2, /* Parrafo de resultado */
	    imagen,
	    numeroAciertos;

	p1 = document.getElementById(idRespuesta);
	p1.style.color = "green";
	imagen = document.getElementById(idImagen);
	imagen.src = "imagenes/acierto.png";
	/* Versión con tratamiento de texto
		p2 = document.getElementById('Resultados');
		p2.innerHTML += "1";
	*/
	/* Versión con tratamiento de numeros */
	p2 = document.getElementById('idAciertos');
	numeroAciertos = parseInt(p2.innerHTML);
	numeroAciertos = numeroAciertos;
	numeroAciertos ++;
	p2.innerHTML = numeroAciertos;
}
function Errores(idRespuesta,idImagen)  
{
	var p1, /* Parrafo de respuesta */
	    p2, /* Parrafo de resultado */
	    imagen,
	    numeroFallos;

	p1 = document.getElementById(idRespuesta);
	p1.style.color = "red";
	imagen = document.getElementById(idImagen);
	imagen.src = "imagenes/error.png";	
	/* Versión con tratamiento de texto
		p2 = document.getElementById('Resultados');
		p2.innerHTML += "0";
	*/
	/* Versión con tratamiento de numeros */
	p2 = document.getElementById('idFallos');
	numeroFallos = parseInt(p2.innerHTML);
	numeroFallos = numeroFallos ;
	numeroFallos ++;
	p2.innerHTML = numeroFallos;
}
function actualizar() {
	location.reload();
}