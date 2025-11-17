const nameInput = document.getElementById('name_inp');
const yearInput = document.getElementById('year_inp');
const colorInput = document.getElementById('color_inp');
const saveBtn = document.getElementById('save-btn'); // ← to'g'rilandi
const result = document.getElementById('result');

let cars = [
	{ name: 'Damas', year: 2030, color: 'success' },
	{ name: 'Malibu', year: 2021, color: 'primary' },
	{ name: 'cobalt', year: 2022, color: 'warning' },
];

saveBtn.addEventListener('click', save);

function save() {
	let carObj = {
		name: nameInput.value,
		year: +yearInput.value,
		color: colorInput.value,
	};
	cars.push(carObj);
	draw();
}

function draw() {
	let res = '';
	for (let i = 0; i < cars.length; i++) {
		res += `<h1 class='border bg-${cars[i].color}'> ${cars[i].name} ${cars[i].year} ${cars[i].color}</h1>`;
	}
	result.innerHTML = res;
}

draw();
