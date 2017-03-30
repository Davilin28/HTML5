function acierto() {
	var p, img;

	p = document.getElementById("parrafo1");
	p.style.color= "green";

	p = document.getElementById("resultado1");
	p.innerHTML = "1";

	img = document.getElementById("imagen");
	img.src="../imagenes/ok.jpg";
}

function fallo() {
	var p, img;

	p = document.getElementById("parrafo2");
	p.style.color= "red";

	p = document.getElementById("resultado1");
	p.innerHTML = "0";

	img = document.getElementById("imagen");
	img.src="../imagenes/down.jpg";
}

function acierto1() {
	var p, img;

	p = document.getElementById("parrafo4");
	p.style.color= "green";

	p = document.getElementById("resultado2");
	p.innerHTML = "1";

	img = document.getElementById("imagen1");
	img.src="../imagenes/ok.jpg";
}

function fallo1() {
	var p, img;

	p = document.getElementById("parrafo3");
	p.style.color= "red";

	p = document.getElementById("resultado2");
	p.innerHTML = "0";

	img = document.getElementById("imagen1");
	img.src="../imagenes/down.jpg";
}
function actualizar() {
	location.reload();
}