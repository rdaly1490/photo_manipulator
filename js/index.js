const controlInputs = document.querySelectorAll('.controls input');
const form = document.querySelector('form');

function handleInputUpdate() {
	const cssUnit = this.dataset.unit || '';
	let value = this.value;
	if (this.name === 'brightness') {
		value = this.value / 100;
	}
	console.log(this.name, value, cssUnit)
	document.documentElement.style.setProperty(`--${this.name}`, value + cssUnit);
}

function handleFormSubmit(e) {
	e.preventDefault();
	const newImageURL = document.querySelector('input[name="url"]').value;
	if (newImageURL) {
		checkImageExists(newImageURL, loadNewImage);
	}
}

function checkImageExists(url, callback) {
  var img = new Image();
  img.onload = () => callback(true, url);
  img.onerror = () => callback(false);
  img.src = url;
}

function loadNewImage(imgExists, url) {
	const newImageSrc = url || '';
	if (imgExists && newImageSrc) {
		document.querySelector('img').src = newImageSrc;
	} else {
		alert("Couldn't load image, please verify the link");
	}
}

controlInputs.forEach(input => input.addEventListener('change', handleInputUpdate));
controlInputs.forEach(input => input.addEventListener('mousemove', handleInputUpdate));
form.addEventListener('submit', handleFormSubmit);
