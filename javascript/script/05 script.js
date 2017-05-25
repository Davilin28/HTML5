function CalcularRango() {
	var edad, res, numEdad;

	res = document.getElementById('resultado');
	edad = document.getElementById('edadActual');
	numEdad = parseInt(edad.innerHTML);
	
	if ((numEdad >= 0) && (numEdad <=12))
		res.innerHTML = "En la infancia";
	else
		if ((numEdad >= 13) && (numEdad <=17))
		res.innerHTML = "En la adolescencia";
	else
		if ((numEdad >= 18) && (numEdad <=26))
		res.innerHTML = "En la juventud";
	else
		if ((numEdad >= 27)
		res.innerHTML = "En la adulto";
}