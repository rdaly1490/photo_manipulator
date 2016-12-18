const inputs = document.querySelectorAll('.controls input');

function handleInputUpdate() {
	const cssUnit = this.dataset.unit || '';
	let value = this.value;
	if (this.name === 'brightness') {
		value = this.value / 100;
	}
	document.documentElement.style.setProperty(`--${this.name}`, value + cssUnit);
}

inputs.forEach(input => input.addEventListener('change', handleInputUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleInputUpdate));