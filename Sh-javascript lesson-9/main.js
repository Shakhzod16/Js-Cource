const strelka = document.querySelector('.strelka');
const krug = document.querySelector('.krug');
const topBox = document.querySelector('.top');
const leftBox = document.querySelector('.left');
const rightBox = document.querySelector('.right');
const bottomBox = document.querySelector('.bottom');

let count = 0;

function rotateBox() {
	topBox.style.backgroundColor = 'white';
	rightBox.style.backgroundColor = 'white';
	bottomBox.style.backgroundColor = 'white';
	leftBox.style.backgroundColor = 'white';

	strelka.style.rotate = count + 'deg';

	if (count >= 0 && count < 90) {
		rightBox.style.backgroundColor = 'green';
	} else if (count >= 90 && count < 180) {
		bottomBox.style.backgroundColor = 'green';
	} else if (count >= 180 && count < 270) {
		leftBox.style.backgroundColor = 'green';
	} else if (count >= 270 && count < 360) {
		topBox.style.backgroundColor = 'green';
	}

	count += 15;

	if (count >= 360) {
		count = 0;
	}
}

// vazifa

const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');
const dots = document.getElementsByClassName('dot');
let index = 0;

dots[index].style.background = 'red';

function updateActive() {
	for (let i = 0; i < dots.length; i++) {
		dots[i].style.background = 'transparent';
	}

	dots[index].style.background = 'red';
}

rightBtn.onclick = function () {
	index++;
	if (index >= dots.length) {
		index = 0;
	}
	updateActive();
};

leftBtn.onclick = function () {
	index--;
	if (index < 0) {
		index = dots.length - 1;
	}
	updateActive();
};
