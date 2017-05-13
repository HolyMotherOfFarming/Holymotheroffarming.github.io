var boton = document.getElementById('boton');

function hideButton() {
	boton.style.display = 'none';
}

boton.addEventListener('click', hideButton);