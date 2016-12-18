const inputs = document.querySelectorAll('.controls input');

function handleInputUpdate() {
	const cssUnit = this.dataset.unit || '';
	document.documentElement.style.setProperty(`--${this.name}`, this.value + cssUnit);
}

inputs.forEach(input => input.addEventListener('change', handleInputUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleInputUpdate));