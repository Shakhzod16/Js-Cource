const box = document.getElementById('box');

const redSection = document.getElementById('red_section');
const blueSection = document.getElementById('blue_section');

let status = 'BLUE';

function draw() {
	if (status === 'BLUE') {
		blueSection.innerHTML = `<div draggable='true' id='box' class='box'></div>`;
		redSection.innerHTML = '';
	} else if (status === 'RED') {
		redSection.innerHTML = `<div draggable='true' id='box' class='box'></div>`;
		blueSection.innerHTML = '';
	}
}

draw();

function ruhsat(e) {
	e.preventDefault();
}

function tashlandi(myStatus) {
	status = myStatus;
	draw();
}

function saveByLocal() {
	localStorage.setItem('status', JSON.stringify('status'));
}
