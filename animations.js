var boton = document.getElementById('boton');
var hard = document.getElementById('hard');

function hideButton() {
	boton.style.display = 'none';
	hard.style.display = 'none';
}

boton.addEventListener('click', hideButton);
