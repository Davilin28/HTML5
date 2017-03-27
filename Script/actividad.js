function acierto() {
	var p;

	p = document.getElementById("parrafo1");
	p.style.color= "green";

	p = document.getElementById("resultado1");
	p.innerHTML = "1";

	p = document.getElementById("imagen");
	p.src="../imagenes/ok.jpg";
}

function fallo() {
	var p;

	p = document.getElementById("parrafo2");
	p.style.color= "red";

	p = document.getElementById("resultado1");
	p.innerHTML = "0";

	p = document.getElementById("imagen");
	p.src="../imagenes/down.jpg";
}

function acierto1() {
	var p;

	p = document.getElementById("parrafo4");
	p.style.color= "green";

	p = document.getElementById("resultado2");
	p.innerHTML = "1";

	p = document.getElementById("imagen1");
	p.src="../imagenes/ok.jpg";
}

function fallo1() {
	var p;

	p = document.getElementById("parrafo3");
	p.style.color= "red";

	p = document.getElementById("resultado2");
	p.innerHTML = "0";

	p = document.getElementById("imagen1");
	p.src="../imagenes/down.jpg";
}
function actualizar() {
	location.reload();
}